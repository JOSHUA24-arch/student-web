# RAPID STUDENT

To configure this repository

a) Clone whole repository
```
git clone https://github.com/JOSHUA24-arch/student-web.git 
```

b) Change directory to the API
```
cd api
```

c) Install all the depencies
```
npm install
```
d) Run/ start the project
```
npm start
```
# Starting using the api <from the local server>

### create student

send `api` request to this link
  ```
  127.0.0.1:400/registerStudent
  ```
with `requirements` 
  ```
  req ={
lastname: "string",
firstname: "string",
parentContacts: "string",
email: "string email",
homeAddress: "string",
password: "string",
parentFName: "string",
parentLName:"string",
}
  ```

get the json response
res= {message: "student created successfully"}

### Login student

send `api` request to this link 
  
  ```
  127.0.0.1:400/login
  ```

provide `email` and `password`
  
response = {
"will be jwt token that expire after 1 hour "
}

### Get all the students registered

send `api` request to this link
  ```
  127.0.0.1:400/getAllStudent
  ```
response will be array of students
[{student1 data},{student2 data}]
