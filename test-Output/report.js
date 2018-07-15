$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/eclipse-workspace/Cucumber_BDD_E2E/src/main/java/features/Home_Feature");
formatter.feature({
  "line": 1,
  "name": "Demo AutomationTesting Home feature",
  "description": "",
  "id": "demo-automationtesting-home-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Demo AutomationTesting SignIn Scenario",
  "description": "",
  "id": "demo-automationtesting-home-feature;demo-automationtesting-signin-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is able to see SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter EmailID for SignUP",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify User is on Registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Enters \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Submit Registration",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "demo-automationtesting-home-feature;demo-automationtesting-signin-scenario;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ],
      "line": 12,
      "id": "demo-automationtesting-home-feature;demo-automationtesting-signin-scenario;;1"
    },
    {
      "cells": [
        "David",
        "Warner"
      ],
      "line": 13,
      "id": "demo-automationtesting-home-feature;demo-automationtesting-signin-scenario;;2"
    },
    {
      "cells": [
        "Santosh",
        "Nakom"
      ],
      "line": 14,
      "id": "demo-automationtesting-home-feature;demo-automationtesting-signin-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Demo AutomationTesting SignIn Scenario",
  "description": "",
  "id": "demo-automationtesting-home-feature;demo-automationtesting-signin-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is able to see SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter EmailID for SignUP",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify User is on Registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Enters \"David\" and \"Warner\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Submit Registration",
  "keyword": "Then "
});
formatter.match({
  "location": "Home_Step_Def.user_is_already_on_Home_page()"
});
formatter.result({
  "duration": 39198255445,
  "status": "passed"
});
formatter.match({
  "location": "Home_Step_Def.user_is_able_to_see_SignIn_button()"
});
formatter.result({
  "duration": 356302232,
  "status": "passed"
});
formatter.match({
  "location": "Home_Step_Def.enter_EmailID_for_SignUP()"
});
formatter.result({
  "duration": 990050129,
  "status": "passed"
});
formatter.match({
  "location": "Home_Step_Def.verify_User_is_on_Registration_page()"
});
formatter.result({
  "duration": 4457038702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 13
    },
    {
      "val": "Warner",
      "offset": 25
    }
  ],
  "location": "Home_Step_Def.User_Enters_FirstName_and_LastName(String,String)"
});
formatter.result({
  "duration": 1513333552,
  "status": "passed"
});
formatter.match({
  "location": "Home_Step_Def.submit_Registration()"
});
formatter.result({
  "duration": 26880,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Demo AutomationTesting SignIn Scenario",
  "description": "",
  "id": "demo-automationtesting-home-feature;demo-automationtesting-signin-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is able to see SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter EmailID for SignUP",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify User is on Registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Enters \"Santosh\" and \"Nakom\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Submit Registration",
  "keyword": "Then "
});
formatter.match({
  "location": "Home_Step_Def.user_is_already_on_Home_page()"
});
formatter.result({
  "duration": 15160499695,
  "status": "passed"
});
formatter.match({
  "location": "Home_Step_Def.user_is_able_to_see_SignIn_button()"
});
formatter.result({
  "duration": 93437053,
  "status": "passed"
});
formatter.match({
  "location": "Home_Step_Def.enter_EmailID_for_SignUP()"
});
formatter.result({
  "duration": 5687037733,
  "status": "passed"
});
formatter.match({
  "location": "Home_Step_Def.verify_User_is_on_Registration_page()"
});
formatter.result({
  "duration": 2905427586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Santosh",
      "offset": 13
    },
    {
      "val": "Nakom",
      "offset": 27
    }
  ],
  "location": "Home_Step_Def.User_Enters_FirstName_and_LastName(String,String)"
});
formatter.result({
  "duration": 1780393293,
  "status": "passed"
});
formatter.match({
  "location": "Home_Step_Def.submit_Registration()"
});
formatter.result({
  "duration": 36267,
  "status": "passed"
});
});