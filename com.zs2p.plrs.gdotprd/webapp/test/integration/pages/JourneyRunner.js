sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/zs2p/plrs/gdotprd/test/integration/pages/ListList",
	"com/zs2p/plrs/gdotprd/test/integration/pages/ListObjectPage"
], function (JourneyRunner, ListList, ListObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/zs2p/plrs/gdotprd') + '/test/flp.html#app-preview',
        pages: {
			onTheListList: ListList,
			onTheListObjectPage: ListObjectPage
        },
        async: true
    });

    return runner;
});

