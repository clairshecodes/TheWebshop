"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.productsisEmpty = true;
        this.products = [];
    }
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.productSubscription.unsubscribe();
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts();
        this.productSubscription = this.productService.getProductUpdateListener()
            .subscribe(function (products) {
            if (products.length >= 0)
                _this.productsisEmpty = false;
            _this.products = products;
        });
    };
    ProductListComponent.prototype.onDelete = function (productId) {
        if (!productId)
            productId = '';
        this.productService.deleteProduct(productId);
        if (__spreadArrays(this.products))
            this.productsisEmpty = false;
        else
            this.productsisEmpty = true;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.css']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
