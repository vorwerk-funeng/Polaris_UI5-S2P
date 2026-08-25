sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/zs2p/plrs/mmrreport/test/integration/pages/MMRList",
	"com/zs2p/plrs/mmrreport/test/integration/pages/MMRObjectPage"
], function (JourneyRunner, MMRList, MMRObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/zs2p/plrs/mmrreport') + '/test/flp.html#app-preview',
        pages: {
			onTheMMRList: MMRList,
			onTheMMRObjectPage: MMRObjectPage
        },
        async: true
    });

    return runner;
});

