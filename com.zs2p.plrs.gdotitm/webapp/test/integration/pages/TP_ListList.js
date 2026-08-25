sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.zs2p.plrs.gdotitm',
            componentId: 'TP_ListList',
            contextPath: '/TP_List'
        },
        CustomPageDefinitions
    );
});