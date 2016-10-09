# akula-ion-current-location

*Modo de uso:*

```html
<script src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>

<button 
    ng-model="data.localizacao"
    ion-current-location
    class="btn btn-block btn-warning rounded">
    Usar minha localização atual
</button>