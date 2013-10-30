<%@ attribute name="action" required="true" rtexprvalue="true" %>
<form method="post" action="${action}" class="simple-form">
    <fieldset>
    <div class="success" data-default="Ändringen har sparats"></div>
    <div class="fail" data-default="Något gick fel"></div>
    <div class="system-error" data-default="Denna funktion verkar ha en bugg"></div>
    <jsp:doBody/>
    </fieldset>
</form>