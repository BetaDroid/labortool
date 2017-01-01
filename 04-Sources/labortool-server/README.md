# LabOrTool Server

### How to stup the api:

1. Pull the repository and using your system shell, change the path to the pulled files
2. Now move to the directory named: `config` and edit the `db_config.conf`file, with your database parameters
3. Go back of a directory and open the file named: `run.py` with a text editor program 
4. Edit the 8th line with the parameter `'development'` or `'production'` (default is `'development'`)
5. Now just run the command: `python run.py` and your api is UP!
6. Use the HTTP client from your shell or Postman (racommanded) to test the api

** **Be sure you already have installed `python 2.7` and the `virtualenv` inside your machine**

** **All the configuration files are situated inside the path `./config` of the server repository**

** **Use only MySQL as DBMS**

** **If you user the `'development'` configuration, the authentication isn't required else if you use the `'production'` one,
   first you have to make an account, authenticate and getting the token, then you have to use the token as username for
   every call you made.**
 


### How to registrate:
 
 1. Make sure that the DBMS and the api are runing
 2. Using you HTTP client (or Postman) make a POST call at the following link: `http://localhost:5000/registration` 
    and as body content send a json like the following one:
```javascript 
  {
    "UserName":"your_user",
    "UserPassword":"your_password",
    "UserRole":"",
    "UesrNote":""
  }
```
You will recive back form the api a message of success or error



### How to authenticate:

1. Make sure that the DBMS and the api are runing
2. Using you HTTP client (or Postman) make a GET call at the following link: `http://localhost:5000/get-auth-token` 
    and using the option Basic Auth with Postman fill the fields with you registrated username and password
3. If the username and the password fit with the ones in the database you will receive a message with the token inside, else 
   an error message 
4. Save the token somewhere and use it as username every time you want to make a call to the api

** **The token will expire after 12h**

** **The password will be saved to the database in hash format and when you want to login, the password you send to the api will
      be converted to hash and then the hashes will be checked with the ones saved in the database**
     
** **When you use a token to authenticate, you can leave empty the password field**

** **The token will be generated using a secret key chosen by you and is situate inside the configuration files**



## Api urls for:

**Category**
> [GET and POST]
> http://localhost:5000/api/v1/categories/    
> [PUT, DELETE and GET]
> http://localhost:5000/api/v1/categories/id

**Category Parameter Type**
> [GET and POST]
> http://localhost:5000/api/v1/categories_param_types/    
> [PUT, DELETE and GET]
> http://localhost:5000/api/v1/categories_param_types/id

**Component**
> [GET and POST]
> http://localhost:5000/api/v1/components/    
> [PUT, DELETE and GET]
> http://localhost:5000/api/v1/components/id

**Component Parameters**
> [GET and POST]
> http://localhost:5000/api/v1/components_params/    
> [PUT, DELETE and GET]
> http://localhost:5000/api/v1/components_params/id

**Distributor**
> [GET and POST]
> http://localhost:5000/api/v1/distributors/    
> [PUT, DELETE and GET]
> http://localhost:5000/api/v1/distributors/id

**Footprint**
> [GET and POST]
> http://localhost:5000/api/v1/footprints/    
> [PUT, DELETE and GET]
> http://localhost:5000/api/v1/footprints/id

**Location**
> [GET and POST]
> http://localhost:5000/api/v1/locations/    
> [PUT, DELETE and GET]
> http://localhost:5000/api/v1/locations/id

**Manufacturer**
> [GET and POST]
> http://localhost:5000/api/v1/manufacturers/    
> [PUT, DELETE and GET]
> http://localhost:5000/api/v1/manufacturers/id

**Prefix**
> [GET and POST]
> http://localhost:5000/api/v1/prefixes/    
> [PUT, DELETE and GET]
> http://localhost:5000/api/v1/prefixes/id

**Unit**
> [GET and POST]
> http://localhost:5000/api/v1/units/    
> [PUT, DELETE and GET]
> http://localhost:5000/api/v1/units/id
