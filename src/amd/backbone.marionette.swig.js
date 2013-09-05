(function (root, factory) {
    if (typeof exports === 'object') {
        var backbone = require('backbone'),
            marionette = require('marionette');
        swig = require('swig');
        module.exports = factory(backbone, swig);
    } else if (typeof define === 'function' && define.amd) {
        define(['backbone', 'swig', 'marionette'], factory);
    }
}(this, function (Backbone, swig) {

    Backbone.Marionette.Renderer.render = function(template, data) {
        var html, templateFunc;
        if (typeof template === 'function') {
            templateFunc = swig.compile(template());
        } else {
            templateFunc = Marionette.TemplateCache.get(template);
        }
        html = templateFunc(data);
        return html;
    };
    Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
        return swig.compile(rawTemplate);
    };

}));
