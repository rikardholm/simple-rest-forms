<%@ taglib prefix="form" uri="http://simple-rest-forms" %>
<!DOCTYPE html>
<html>
<head>
    <title>Tools</title>
    <link rel="stylesheet" type="text/css" href="/css/simple-rest-forms.css"/>
    <script data-main="js/main" src="/js/require.js"></script>
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

<form:form action="/event/buggy">
    <ul>
        <li><form:input name="firstName"/></li>
        <li><form:button/></li>
    </ul>
</form:form>
<form:form action="/event/unavailable">
    <ul>
        <li><form:input name="firstName"/></li>
        <li><form:button/></li>
    </ul>
</form:form>

<form:form action="/event/unauthorized">
    <ul>
        <li><form:input name="firstName"/></li>
        <li><form:button/></li>
    </ul>
</form:form>
</body>
</html>
