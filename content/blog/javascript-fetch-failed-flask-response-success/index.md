---
title: "Fetch failed but Flask is success"
description: "Network request to flak server is failed but the flask server show successful response."
date: 2021-05-02T22:00:21+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["flask"]
banner: "blog/javascript-fetch-failed-flask-response-success/banner.png"
---

This error happens when your javascript fetch fails. But, Flask server shows successful return response. Which means something to do with the access control origin. This usually happens when the HTML serve from different way. If the HTML serves from normal flask server then it wouldn’t be a problem. So if it’s different way then need to make sure you correctly set the corps so that javascript fetch will success. 

### Response
We can always add response headers in the flask response. All we have to do is assign the return response into the variable and modify the headers like this. 
#### Old return response
```python
return jsonify({"message": "success"})
```

#### New return response
```python
response = jsonify({"message": "success"})
response.headers.add("Access-Control-Allow-Origin", "*")
return response
```

As you can see I have modify the headers by adding access control allow origin into the response.headers. 

### Flask-Corps
There is this library we can use it to modify the headers in the all of the requests. Just simply install flask-corps from pypi then enable CORPS like this.

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
```

### Conclusion
We have seen that I have shown you how to modify the headers from the response and then if that is the case then use flask-corps to modify the response for all of the response in flask.