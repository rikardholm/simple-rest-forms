<%@ taglib prefix="form" uri="http://simple-rest-forms" %>
<!DOCTYPE html>
<html>
<head>
    <title>Tools</title>
    <script src="/js/jquery-2.0.3.min.js"></script>
    <script src="/js/simple-rest-forms.js"></script>
</head>
<body>
<form:form action="/event/hello">
    <ul>
        <li>
            <form:input name="firstName"/>
        </li>
        <li>
            <form:button/>
        </li>
    </ul>
</form:form>

<form:form action="/event/store">
    <ul>
        <li><form:input name="firstName"/></li>
        <li><form:button/></li>
    </ul>
</form:form>

<form:form action="/event/unknown">
    <ul>
        <li><form:input name="firstName"/></li>
        <li><form:button/></li>
    </ul>
</form:form>
</body>
</html>
