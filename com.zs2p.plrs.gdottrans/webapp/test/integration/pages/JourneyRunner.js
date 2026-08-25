sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/zs2p/plrs/gdottrans/test/integration/pages/TP_ProductList",
	"com/zs2p/plrs/gdottrans/test/integration/pages/TP_ProductObjectPage"
], function (JourneyRunner, TP_ProductList, TP_ProductObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/zs2p/plrs/gdottrans') + '/test/flp.html#app-preview',
        pages: {
			onTheTP_ProductList: TP_ProductList,
			onTheTP_ProductObjectPage: TP_ProductObjectPage
        },
        async: true
    });

    return runner;
});

