package com.sudduthbest.DocuTort.models.enumerations;

public enum NavbarLinks {

    ABOUT ("About Us", "/about", "Learn more about us"),
    NEWS ("Legal News", "/news", "Everything new and exciting from our world"),
    DOCUMENT ("Documents", "/document", "Where we make your (legal) dreams come true");

    private final String name;
    private final String url;
    private final String description;

    NavbarLinks(String name, String pluralName, String description) {
        this.name = name;
        this.url = pluralName;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getUrl() {
        return url;
    }

    public String getDescription() {
        return description;
    }
}
