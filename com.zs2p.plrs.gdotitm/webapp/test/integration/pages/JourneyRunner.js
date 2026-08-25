sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/zs2p/plrs/gdotitm/test/integration/pages/TP_ListList",
	"com/zs2p/plrs/gdotitm/test/integration/pages/TP_ListObjectPage"
], function (JourneyRunner, TP_ListList, TP_ListObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/zs2p/plrs/gdotitm') + '/test/flp.html#app-preview',
        pages: {
			onTheTP_ListList: TP_ListList,
			onTheTP_ListObjectPage: TP_ListObjectPage
        },
        async: true
    });

    return runner;
});

