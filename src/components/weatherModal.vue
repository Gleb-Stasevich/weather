<template>
    <!-- Button trigger modal -->
    <button class="open-my-modal position-absolute" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ошибка</h5>
                </div>
                <div class="modal-body">
                    Неизвестное имя города
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'weather-modal',
}

</script>
<style lang="scss" scoped>
.open-my-modal {
    touch-action: none;
    opacity: 0;
}
</style>
