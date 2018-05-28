# angular-k-stepper
Stepper directive for angularjs

# Usage

Install:
```bash
bower install angular-k-stepper -save
```

Activate module in your application:

```javascript
angular.module('demo', ['k-stepper']);
```

Use directive:

```html
<div class="form-group">
    <label>Enter a number between -10 and 10</label>
    <div class="input-group">
        <input type="text" name="numField" type="text" ng-model="kNum" min="-10" max="10" class="form-control">
        <span class="input-group-addon">
            <span k-stepper value="kNum"  min="-10" max="10" step="1"></span>
        </span>
    </div>
    
</div>
```