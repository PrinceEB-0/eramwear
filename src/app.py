from flask import Flask, request, jsonify

import pymysql
import pymysql.cursors
import os


#remeber to install cors
from flask_cors import CORS


#initiate application
app=Flask(__name__)

#cors=cross origin resource sharing
CORS(app)

# configure onto which folder the image get saved
app.config['UPLOAD_FOLDER'] = '/home/PrinceEB/mysite/static/images'


#create the signup route
@app.route("/api/signup",methods=["POST"])
def signup():
    if request.method=="POST":
        #Extract the inserted details from the form
        username=request.form["username"]
        email=request.form["email"]
        phone=request.form["phone"]
        password=request.form["password"]

        #Establish a connection to the database
        # connection=pymysql.connect(host="localhost", user="root", passwd="", database="sokogarden")
        connection=pymysql.connect(host="PrinceEB.mysql.pythonanywhere-services.com", user="PrinceEB", passwd="modcom1234", database="PrinceEB$default")
        #create cursor that will enable use execute sql queries on python
        cursor=connection.cursor()

        #structure the sql insert query
        #%s is a placeholder ~ something used inplace of another thing. It will be replaced with actual/real data gotten from the form
        sql="INSERT INTO users(username,password,email,phone) VALUES(%s, %s, %s, %s)"

        #put the information extracted from the form into a variable
        data=(username, password, email, phone)

        #use the cursor to execute the sql as you replace the placeholders with the actual data
        cursor.execute(sql, data)

        #commit the changes to the database
        connection.commit()

        return jsonify({"Message":"Signup successful"})




@app.route("/api/signin", methods=["POST"])
def signin():
    if request.method=="POST":
        #get the details entered on the form
        email=request.form["email"]
        password=request.form["password"]

        #establish a database connection
        # connection=pymysql.connect(host="localhost", user="root", password="", database="sokogarden")
        connection=pymysql.connect(host="PrinceEB.mysql.pythonanywhere-services.com", user="PrinceEB", passwd="modcom1234", database="PrinceEB$default")


        #create a cursor
        cursor=connection.cursor(pymysql.cursors.DictCursor)

        #structure a query to verify whether the email and password entered is correct
        sql="SELECT * FROM users WHERE email=%s AND password=%s"

        #create a variable that will hold the (2)-data/information from the form
        data=(email, password)

        #use the cursor to execute the sql as you replace the place holders with the actual data.
        cursor.execute(sql, data)

        #check how many rows are found when you run the query
        #if there is no row found, it means either the password or the email or both are incorrect
        #if there is a row found, it means both the password and email are correct

        if cursor.rowcount==0:
            return jsonify({"Message": "Login failed"})
        else :
            #when the details are correct
            user=cursor.fetchone()

            #show the details of the user/person
            return jsonify({"Message":"Login successful", "user":user})

#create a route to add the products
@app.route("/api/addproduct", methods=["POST"])
def addproduct():
    #extract details/data from the form/insomnia
    product_name=request.form["product_name"]
    product_description=request.form["product_description"]
    product_cost=request.form["product_cost"]

    #The product photo, you will be requesting for it from the files
    photo = request.files["product_photo"]
    #extract the photo name from the selected photo
    filename = photo.filename
    #By use of the OS(operating system library) take the path of the photo
    photo_path=os.path.join(app.config['UPLOAD_FOLDER'], filename)
    #Save your photo on that particular path
    photo.save(photo_path)

    #establish a connection to the database
    # connection=pymysql.connect(host="localhost", user="root", password="", database="sokogarden")
    connection=pymysql.connect(host="PrinceEB.mysql.pythonanywhere-services.com", user="PrinceEB", passwd="modcom1234", database="PrinceEB$default")


    #create a cursor to execute command
    cursor = connection.cursor()

    #structure the sql query to insert products to the table products on the Database
    sql= "INSERT INTO products(product_name,product_description,product_cost,product_photo) VALUES(%s, %s, %s, %s)"

    #create that will hold the data entered in the form
    data=(product_name, product_description, product_cost, filename)

    #use the cursor to execute the sql
    cursor.execute(sql, data)

    #commit the changes to the database
    connection.commit()

    #print out the OS path
    print(os.getcwd() + "/" + photo_path)

    #tell whether the product ha sbeen inserted into the database
    return jsonify({"Message":"Product details added successfully"})


@app.route("/api/getproducts", methods=["GET"])
#create the function
def getproducts():
    #establish a connection between python and database
    # connection=pymysql.connect(host="localhost", user="root", password="", database="sokogarden")
    connection=pymysql.connect(host="PrinceEB.mysql.pythonanywhere-services.com", user="PrinceEB", passwd="modcom1234", database="PrinceEB$default")


    #create a cursor to help you execute commands
    #the dict cursor helps us to have the records in terms of key-value-pair.
    cursor=connection.cursor(pymysql.cursors.DictCursor)

    #structure/come up with the sql query to show all the records
    sql="SELECT * FROM products"
    #use the cursor to execute the sql
    cursor.execute(sql)

    #come up with a variable that will hold all the records of the products table
    product_details=cursor.fetchall()

    return jsonify(product_details)


    # Mpesa Payment Route
import requests
import datetime
import base64
from requests.auth import HTTPBasicAuth

@app.route('/api/mpesa_payment', methods=['POST'])
def mpesa_payment():
    if request.method == 'POST':
        # Extract POST Values sent
        amount = request.form['amount']
        phone = request.form['phone']

        # Provide consumer_key and consumer_secret provided by safaricom
        consumer_key = "GTWADFxIpUfDoNikNGqq1C3023evM6UH"
        consumer_secret = "amFbAoUByPV2rM5A"

        # Authenticate Yourself using above credentials to Safaricom Services, and Bearer Token this is used by safaricom for security identification purposes - Your are given Access
        api_URL = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"  # AUTH URL
        # Provide your consumer_key and consumer_secret
        response = requests.get(api_URL, auth=HTTPBasicAuth(consumer_key, consumer_secret))
        # Get response as Dictionary
        data = response.json()
        # Retrieve the Provide Token
        # Token allows you to proceed with the transaction
        access_token = "Bearer" + ' ' + data['access_token']

        #  GETTING THE PASSWORD
        timestamp = datetime.datetime.today().strftime('%Y%m%d%H%M%S')  # Current Time
        passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'  # Passkey(Safaricom Provided)
        business_short_code = "174379"  # Test Paybile (Safaricom Provided)
        # Combine above 3 Strings to get data variable
        data = business_short_code + passkey + timestamp
        # Encode to Base64
        encoded = base64.b64encode(data.encode())
        password = encoded.decode()

        # BODY OR PAYLOAD
        payload = {
            "BusinessShortCode": "174379",
            "Password":password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": "1",  # use 1 when testing
            "PartyA": phone,  # change to your number
            "PartyB": "174379",
            "PhoneNumber": phone,
            "CallBackURL": "https://coding.co.ke/api/confirm.php",
            "AccountReference": "SokoGarden Online",
            "TransactionDesc": "Payments for Products"
        }

        # POPULAING THE HTTP HEADER, PROVIDE THE TOKEN ISSUED EARLIER
        headers = {
            "Authorization": access_token,
            "Content-Type": "application/json"
        }

        # Specify STK Push  Trigger URL
        url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
        # Create a POST Request to above url, providing headers, payload
        # Below triggers an STK Push to the phone number indicated in the payload and the amount.
        response = requests.post(url, json=payload, headers=headers)
        print(response.text) #
        # Give a Response
        return jsonify({"message": "An MPESA Prompt has been sent to Your Phone, Please Check & Complete Payment"})


#Run the application
# app.run(debug=True)

