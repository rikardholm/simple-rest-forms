package servlet.controllers;

public class ErrorMessages {
    private String field;
    private String message;

    public ErrorMessages(String field, String message) {
        this.field = field;
        this.message = message;
    }

    public String getField() {
        return field;
    }

    public String getMessage() {
        return message;
    }
}
