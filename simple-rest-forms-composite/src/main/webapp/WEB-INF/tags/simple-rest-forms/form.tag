<%@ tag pageEncoding="UTF-8" %>
<%@ attribute name="action" required="true" rtexprvalue="true" %>

<form method="post" action="${action}" class="simple-form">
        <div class="success" data-default="Ändringen har sparats"></div>
        <div class="invalid" data-default="Begäran har inte godtagits av systemet"></div>
        <div class="unavailable" data-default="Tjänsten är förnärvarande inte tillgänglig"></div>
        <div class="error" data-default="Denna funktion verkar ha en bugg"></div>
        <jsp:doBody/>
</form>