<%@ attribute name="action" required="true" rtexprvalue="true" %>
<form method="post" action="${action}" class="simple-form">
    <fieldset>
    <div class="simple-form-message success" data-default="Ändringen har sparats"></div>
    <div class="simple-form-message fail" data-default="Begäran har inte godtagits av systemet"></div>
    <div class="simple-form-message system-error" data-default="Denna funktion verkar ha en bugg" data-503="Tjänsten är förnärvarande inte tillgänglig"></div>
    <jsp:doBody/>
    </fieldset>
</form>