<%@ attribute name="action" required="true" rtexprvalue="true" %>
<form method="post" action="${action}" class="simple-form">
    <div class="success"></div>
    <div class="fail"></div>
    <jsp:doBody/>
</form> 