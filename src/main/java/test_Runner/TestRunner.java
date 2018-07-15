package test_Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="G:/eclipse-workspace/Cucumber_BDD_E2E/src/main/java/features/Home_Feature" //the path of the feature files
        ,glue={"step_Definitions"} //the path of the step definition files
		,format={"pretty","html:test-Output"}
		,monochrome = true//display the console output in a proper readable format
		,strict = true //it will check if any step is not defined in step definition file
		,dryRun=false//to check the mapping is proper between feature file and step def file
		
		)

public class TestRunner {

}
