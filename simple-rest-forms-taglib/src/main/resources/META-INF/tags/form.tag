<%@ attribute name="action" required="true" rtexprvalue="true" %>
<form method="post" action="${action}" class="simple-form">
    <fieldset>
    <div class="simple-form-message success" data-default="Ändringen har sparats"></div>
    <div class="simple-form-message fail" data-default="Något gick fel"></div>
    <div class="simple-form-message system-error" data-default="Denna funktion verkar ha en bugg"></div>
    <jsp:doBody/>
    </fieldset>
</form>