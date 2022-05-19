Coveo.TemplateCache.registerTemplate("Jira", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-cell\" style=\"vertical-align:top;text-align:center;width:32px;\">\n    <span class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\"></span>\n    <div class=\"CoveoQuickview\"></div>\n  </div>\n  <div class=\"coveo-result-cell\" style=\"vertical-align: top;padding-left: 16px;\">\n    <div class=\"coveo-result-row\" style=\"margin-top:0;\">\n      <div class=\"coveo-result-cell\" style=\"vertical-align:top;font-size:16px;\" role=\"heading\" aria-level=\"2\">\n        <a class=\"CoveoResultLink\"></a>\n        <span class=\"CoveoText\" data-value=\" - \"></span>\n        <a class=\"CoveoResultLink\" data-title-template=\"${raw.jikey}\"></a>\n      </div>\n      <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\n        <div class=\"coveo-result-row\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n        </div>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\"  style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\">\n        <span class=\"CoveoBadge\" data-field=\"@jifieldspriorityname\" data-colors='{\"icon\":\"#039BE5\",\"text\":\"#039BE5\"}'></span>\n\t\t    <span class=\"CoveoBadge\" data-field=\"@jifieldsstatusname\" data-colors='{\"icon\":\"#388E3C\",\"text\":\"#388E3C\"}'></span>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\">\n        <span class=\"CoveoExcerpt\"></span>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\">\n        <span class=\"CoveoFieldValue\" data-field=\"@jiprojectname\" data-text-caption=\"Project\" style=\"margin-right:30px;\"></span>\n        <span class=\"CoveoFieldValue\" data-field=\"@jifieldsissuetypename\" data-text-caption=\"Issue type\" style=\"margin-right:30px;\"></span>\n        <span class=\"CoveoFieldValue\" data-field=\"@jifieldsassigneedisplayname\" data-text-caption=\"Assigned to\" style=\"margin-right:30px;\"></span>\n        <span class=\"CoveoFieldValue\" data-field=\"@jifieldsduedate\" data-text-caption=\"Due date\" data-helper=\"date\" style=\"margin-right:30px;\"></span>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\" >\n        <span class=\"CoveoResultAttachments\" data-result-template-id=\"JiraAttachment\"></span>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\">\n      <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\n        <table class=\"CoveoFieldTable\">\n          <tr data-field=\"@jifieldscreated\" data-caption=\"Created Date\" data-helper=\"dateTime\"></tr>\n          <tr data-field=\"@jifieldsReporterDisplayName\" data-caption=\"Reporter\"></tr>\n          <tr data-field=\"@jifieldsupdated\" data-caption=\"Updated Date\" data-helper=\"dateTime\"></tr>\n          <tr data-field=\"@jifieldstimetrackingoriginalestimate\" data-caption=\"Time estimated\"></tr>\n          <tr data-field=\"@jifieldstimetrackingremainingestimate\" data-caption=\"Time remaining\"></tr>\n          <tr data-field=\"@jifieldstimetrackingtimespent\" data-caption=\"Time logged\"></tr>\n          <tr data-field=\"@jifieldsversionsname\" data-caption=\"Version\"></tr>\n          <tr data-field=\"@jifieldslabels\" data-caption=\"Labels\"></tr>\n          <tr data-field=\"@jifieldsdescription\" data-caption=\"Description\"></tr>\n        </table>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\">\n      <div class=\"coveo-result-cell\">\n        <div class=\"CoveoMissingTerms\"></div>\n      </div>\n    </div>\n  </div>\n</div>",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"connectortype","values":["JiraCrawler"]}],"mobile":null,"role":null}),true, true)
Coveo.TemplateCache.registerTemplate("JiraAttachment", Coveo.HtmlTemplate.fromString("<div class=\"coveo-attachment-container\">\n    <div class=\"CoveoIcon\" data-small=\"true\"></div>\n    <a class=\"CoveoResultLink\"></a>\n    <span class=\"CoveoQuickview\"></span>\n</div>\n",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null,"role":null}),false, false)