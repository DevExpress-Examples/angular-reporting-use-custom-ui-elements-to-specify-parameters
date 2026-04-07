import { Component, Inject, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { DxReportViewerComponent, DxReportViewerModule} from 'devexpress-reporting-angular';

@Component({
    selector: 'report-viewer',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './report-viewer.html',
    styleUrls: [
        "../../../node_modules/devextreme/dist/css/dx.material.blue.light.css",
        "../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
        "../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.material.blue.light.css",
        "../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css"
    ],
    imports: [DxReportViewerModule]
})

export class ReportViewer {
    @ViewChild(DxReportViewerComponent, { static: false })
    protected viewer!: DxReportViewerComponent;
    @ViewChild('paramValue', { static: false })
    public paramValue!: ElementRef;
    reportUrl: string = "XtraReport1";
    invokeAction: string = '/DXXRDV';

    submitParameter() {
        var parameterValue = this.paramValue.nativeElement.value;
        this.viewer.bindingSender.OpenReport(this.reportUrl + "?strParam=" + parameterValue);
    }

    constructor(@Inject('BASE_URL') protected readonly hostUrl: string) { }
}