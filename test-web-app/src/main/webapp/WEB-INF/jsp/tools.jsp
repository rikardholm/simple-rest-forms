<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://simple-rest-forms" %>
<!DOCTYPE html>
<html>
<head>
    <title>Tools</title>
    <link rel="stylesheet" type="text/css" href="/js/simple-rest-forms.css">
    <c:choose>
        <c:when test="${param.js eq 'development'}">
            <script data-main="/js/main-development" src="/js/require.js"></script>
        </c:when>
        <c:otherwise>
            <script data-main="/js/main" src="/js/require.js"></script>
        </c:otherwise>
    </c:choose>
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
