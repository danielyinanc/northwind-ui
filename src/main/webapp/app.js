Ext.define('MyApp.view.TestViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.test', // connects to viewModel/type below

    data: {
        firstName: 'John',
        lastName: 'Doe'
    },

    formulas: {
        // We'll explain formulas in more detail soon.
        name: function (get) {
            var fn = get('firstName'), ln = get('lastName');
            return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
        }
    }
});

Ext.define('MyApp.view.TestView', {
    extend: 'Ext.panel.Panel',
    layout: 'form',

    // Always use this form when defining a view class. This
    // allows the creator of the component to pass data without
    // erasing the ViewModel type that we want.
    viewModel: {
        type: 'test'  // references alias "viewmodel.test"
    },

    bind: {
        title: 'Hello {name}'
    },

    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        bind: '{firstName}'
    },{
        fieldLabel: 'Last Name',
        bind: '{lastName}'
    },{
        xtype: 'button',
        text: 'Submit',
        bind: {
            hidden: '{!name}'
        }
    }]
});

Ext.onReady(function () {
    Ext.create('MyApp.view.TestView', {
        renderTo: Ext.getBody(),
        width: 400
    });
});