# Back-End with Node.js Express & JWT login and register example with MongoDB

- Flow login user and user register with JWT and Cookies. 
- Architecture over Node.js Express with CORS, Authentication, Authorization with middlewares and sequelize.

---

**Sign Up User**
```text
curl --location 'localhost:8080/api/auth/signup' \
--header 'Content-Type: application/json' \
--header 'Cookie: rasysbox-session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTFaRFZrWmpNeVlUVTFaRE13TnpjeE9HWTJNV00zTUNJc0ltbGhkQ0k2TVRjd09EVXhOamt5TVN3aVpYaHdJam94TnpBNE5qQXpNekl4ZlEuTTU4QWlGa1pUcU5wS1prM0haN3FfTktMVDhfMXVtY25DeUtlRHR2dkpFNCJ9; rasysbox-session.sig=b2CH5hS1LukTtHoWAI0tuot6Zjg' \
--data-raw '{
    "username": "mod",
    "email": "usuario.mod@correo.com",
    "password": "12345678",
    "roles": ["user", "moderator"]
}'
```

---

**Sign In User**
```text
curl --location 'localhost:8080/api/auth/signin' \
--header 'Content-Type: application/json' \
--header 'Cookie: rasysbox-session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTFaRFZrWmpNeVlUVTFaRE13TnpjeE9HWTJNV00zTUNJc0ltbGhkQ0k2TVRjd09EVXhOekF3TVN3aVpYaHdJam94TnpBNE5qQXpOREF4ZlEuMjhPNUlKYzdrX1B3T3hQM1VNTENaN0ZYS0NPY1ViWTBVSmF3QWxrcHBSYyJ9; rasysbox-session.sig=Xqir_IGYyhWJO4mtwQBjhk0mpgw' \
--data '{
    "username": "mod",
    "password": "12345678"
}'
```

---

**Public Content**
```text
curl --location 'localhost:8080/api/test/all' \
--header 'Cookie: rasysbox-session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTFaRFZrWmpNeVlUVTFaRE13TnpjeE9HWTJNV00zTUNJc0ltbGhkQ0k2TVRjd09EVXhOamt6TXl3aVpYaHdJam94TnpBNE5qQXpNek16ZlEuei0zdjVBNmI5aTdxUGFTdEEwb2I1cF9OazM0QUMxYkV2SDV4Q0hoX09DbyJ9; rasysbox-session.sig=U1jopj4LeY_GSPEURZ3RY9z82uk'
```

---

**User Content**
```text
curl --location 'localhost:8080/api/test/user' \
--header 'Cookie: rasysbox-session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTFaRFZrWmpNeVlUVTFaRE13TnpjeE9HWTJNV00zTUNJc0ltbGhkQ0k2TVRjd09EVXhOekF3TVN3aVpYaHdJam94TnpBNE5qQXpOREF4ZlEuMjhPNUlKYzdrX1B3T3hQM1VNTENaN0ZYS0NPY1ViWTBVSmF3QWxrcHBSYyJ9; rasysbox-session.sig=Xqir_IGYyhWJO4mtwQBjhk0mpgw'
```

---

**Moderator Content**
```text
curl --location 'localhost:8080/api/test/mod' \
--header 'Cookie: rasysbox-session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTFaRFZrWmpNeVlUVTFaRE13TnpjeE9HWTJNV00zTUNJc0ltbGhkQ0k2TVRjd09EVXhOekF3TVN3aVpYaHdJam94TnpBNE5qQXpOREF4ZlEuMjhPNUlKYzdrX1B3T3hQM1VNTENaN0ZYS0NPY1ViWTBVSmF3QWxrcHBSYyJ9; rasysbox-session.sig=Xqir_IGYyhWJO4mtwQBjhk0mpgw'
```

---

**Admin Content**
```text
curl --location 'localhost:8080/api/test/admin' \
--header 'Cookie: rasysbox-session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTFaRFZrWmpNeVlUVTFaRE13TnpjeE9HWTJNV00zTUNJc0ltbGhkQ0k2TVRjd09EVXhOekF3TVN3aVpYaHdJam94TnpBNE5qQXpOREF4ZlEuMjhPNUlKYzdrX1B3T3hQM1VNTENaN0ZYS0NPY1ViWTBVSmF3QWxrcHBSYyJ9; rasysbox-session.sig=Xqir_IGYyhWJO4mtwQBjhk0mpgw'
```

---
**@RASYSBOX**
