---
title: "How to work with uploaded media files in Django"
description: "Best way to handle user upload files in django forms and views."
date: 2021-03-27T09:00:00+05:30
draft: false
tags: [django]
categories: [development]
type: "posts"
---

# How to work with uploaded Media files in Django
This is process how to handle the user uploaded media files in Django. 
There is certain way we can process the Django uploaded files. 

### Key steps
* Make the form `POST` request with data
* And in the Django views get the files in request.FILES method.
* Store the uploaded files in to the database.
* Retrieve the files and show in the templates.

### Part 1
First part in the process is to write the HTML files to show file upload button to the user.  Anything with `type=“file”` will display it in select style box to open the file viewer depending upon the operating system. 

Now you may have other form inputs and add this file input along with those. Here is an example to show input file inside the form.

```html
<form action="view_url" method="POST" enctype="multipart/form-data" >
  <input type="file" name="attachment" />
  <button type="submit">Upload</button>
<form>
```

### Part 2
This part is actually retrieving what is sending from the frontend. When the user is chosen the file and click submit the form will make the POST request along with the file use selected. 

Now in the backend code we can retrieve the file using `request.FILES.get("name_here")`.  Let’s see a simple example how this can be done using Django views.

```python
def some_view_name(request):
		# Process POST request.
		if request.method == "POST":
				# Get attachment here.
				attachment = request.FILES.get("attachment")
				
```

### Part 3
To store the files in database is very easy. There is in built way of doing this. But remember only the path is stored in the database field. The content will live in the actual file system.  

Let’s see how to create a file field in the database. Here is the example that have the attachment field in the sample class.

```python

def upload_attachment(instance, filename):
		return f"{filename}"

class Sample(models.Model):
		attachment = models.FileField(upload_to=upload_attachment)
``` 

When we upload the file we can have the option to tell where to upload using the `upload_to` keyword argument. That upload function takes the instance and filename. It’s upto you where you plan to store that value. 

And in our views we can attach that retrieved file in to the database like this. 
```python
		# Rest of the code here. 
		attachment = request.FILES.get("attachment")
      
		sample = Sample.objects.create()
		sample.attachment = attachment
		sample.save()
```

Above code will save the attachment path in the database and the file will be stored in uploaded file path.

### Part 4
Final part of this tutorial is to show user uploaded file in the template. For example if user uploaded the profile image and it can show to user in image tag. 

Let’s assume that we have the sample object (1) in our template context. All we have to do is call the attachment attribute and the url for the absolute file url. 

```html
<div>
	<img src="{{ sample.attachment.url }}" >
</div>
```

### Conclusion
We saw that how to create a form tag and how to process those uploaded files in the backend and also we have seen how to store that data and retrieval on the frontend to display it.
