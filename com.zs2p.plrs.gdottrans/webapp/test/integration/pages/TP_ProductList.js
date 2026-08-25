sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.zs2p.plrs.gdottrans',
            componentId: 'TP_ProductList',
            contextPath: '/TP_Product'
        },
        CustomPageDefinitions
    );
});