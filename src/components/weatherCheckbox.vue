<template>
    <div id="app-cover">
        <div class="row">
            <div class="toggle-button-cover">
                <div class="button-cover">
                    <div class="button r" id="button-10">
                        <input type="checkbox" class="checkbox">
                        <div class="knobs">
                            <span>C</span>
                        </div>
                        <div class="layer"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'weather-checkbox',
};
</script>

<style lang="scss" scoped>
.row {
    display: table-row;
}

.toggle-button-cover {
    display: table-cell;
    position: relative;
    width: 200px;
    height: 140px;
    box-sizing: border-box;
}

.button-cover:before {
    box-sizing: content-box !important;
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    color: #8A74A1;
    font-size: 12px;
    line-height: 1;
    padding: 5px;
}

.button-cover,
.knobs,
.layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.button {
    position: relative;
    top: 50%;
    width: 74px;
    height: 36px;
    margin: -20px auto 0 auto;
    overflow: hidden;
}

.button.r,
.button.r .layer {
    border-radius: 100px;
}

.button.b2 {
    border-radius: 2px;
}

.checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
}

.knobs {
    z-index: 2;
}

.layer {
    width: 100%;
    background-color: #8A74A1;
    transition: 0.3s ease all;
    z-index: 1;
}


/* Button 10 */
#button-10 .knobs:before,
#button-10 .knobs:after,
#button-10 .knobs span {
    box-sizing: content-box !important;
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
    border-radius: 100%;
}

#button-10 .knobs:before {
    box-sizing: content-box !important;
    content: "";
    left: 4px;
    background-color: #9E8CB0;
}

#button-10 .knobs:after {
    box-sizing: content-box !important;
    content: "F";
    right: 4px;
    color: white;
}

#button-10 .knobs span {
    display: inline-block;
    left: 4px;
    color: #fff;
    z-index: 1;
}

#button-10 .checkbox:checked+.knobs span {
    color: white;
}

#button-10 .checkbox:checked+.knobs:before {
    box-sizing: content-box !important;
    left: 42px;
    background-color: #9E8CB0;
    border-radius: 100%;
}

#button-10 .checkbox:checked+.knobs:after {
    box-sizing: content-box !important;
    color: #fff;
}

#button-10 .checkbox:checked~.layer {
    background-color: #8A74A1;
}
</style>