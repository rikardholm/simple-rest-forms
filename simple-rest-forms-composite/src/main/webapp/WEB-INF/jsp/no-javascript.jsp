<%@ taglib prefix="form" uri="http://simple-rest-forms" %>
<!DOCTYPE html>
<html>
<head>
    <title>Tools</title>
    <link rel="stylesheet" type="text/css" href="/css/simple-rest-forms.css"/>
</head>
<body>
<h1>Page without JS</h1>
<form:form action="/event/unknown">
    <fieldset>
        <legend>Should not post</legend>
        <ul>
            <li><form:button/></li>
        </ul>
    </fieldset>
</form:form>
</body>
</html>