"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductCreateComponent = void 0;
var core_1 = require("@angular/core");
var product_model_1 = require("../../models/product.model");
var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.mode = 'create';
        this.productId = '';
        this.product = new product_model_1.product();
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('productId')) {
                _this.mode = 'edit';
                _this.productId = paramMap.get('productId') || '';
                _this.product = _this.productService.getProduct(_this.productId);
            }
            else {
                _this.mode = 'create';
                _this.productId = '';
            }
        });
    };
    ProductCreateComponent.prototype.onAddProduct = function (form) {
        if (form.invalid) {
            return;
        }
        var title = form.value.enteredTitle;
        var description = form.value.enteredDescriptionn;
        var price = form.value.enteredPrice;
        var post = ({ title: title, description: description, price: price });
        this.productService.addProduct(post);
    };
    ProductCreateComponent = __decorate([
        core_1.Component({
            templateUrl: './product-create.component.html',
            selector: 'product-create',
            styleUrls: ['./product-create.component.css']
        })
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());
exports.ProductCreateComponent = ProductCreateComponent;
