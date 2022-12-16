<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/411864557/2022.2)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1034311)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# Reporting for Angular - Use Custom UI Elements to Specify Parameter Values

This example demonstrates how to do the following:

1. Create a page with a document viewer, editor, and button.
2. Hide the default [Parameters Panel](https://docs.devexpress.com/XtraReports/402960) in the viewer.
3. Set a report parameter's value to a value from the editor on a button click.

![](Images/reporting-angular-specify-parameter-values.png)

<!-- default file list -->

## Files to Look At

- [report-viewer.html](CS/ReportingWebApp/ClientApp/src/app/reportviewer/report-viewer.html)
- [report-viewer.ts](CS/ReportingWebApp/ClientApp/src/app/reportviewer/report-viewer.ts)
- [CustomReportProvider.cs](CS/ReportingWebApp/Services/CustomReportProvider.cs)

<!-- default file list end -->

## How to Run the Example

Download the project and do the following:

1. Update NuGet packages.
2. Build and run the project.
3. Navigate to the page that contains the document viewer.
4. Enter a parameter value in the editor and click *Submit*.

## Documentation

- [Specify Parameter Values in an Angular Reporting Application](https://docs.devexpress.com/XtraReports/401930)

## More Examples

- [Reporting for Angular - Handle the ParametersInitialized event](https://github.com/DevExpress-Examples/angular-reporting-handle-parameters-initialized-event)
