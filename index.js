const express = require('express');
const taller = express();
const port = 3000;

var utiles = [{id:1,name:'Leche',precio:3700,fecha_vencimiento:'2024/07/12',categoria:'Lacteo',Descripcion:'Leche Entera Colanta'},
                 {id:2,name:'Salmon Entero',precio:25000,fecha_vencimiento:'2025/01/14',categoria:'Carnes',Descripcion:'Atun en Agua Bancamps'},
                 {id:3,name:'Arepas de Chocolo',precio:2400,fecha_vencimiento:'2024/05/30',categoria:'Arepas',Descripcion:'Arepas de chocolo'},
                 {id:4,name:'Queso',precio:4000,fecha_vencimiento:'2024/06/06',categoria:'Lacteo',Descripcion:'Queso Cuajada'},
                 {id:5,name:'Arepas Amarillas',precio:1500,fecha_vencimiento:'2024/05/22',categoria:'Arepas',Descripcion:'Arepas Amarillas de Maiz'},
                 {id:6, name:'Yogurt Fresa',precio:2500,fecha_vencimiento:'2024/05/15',categoria:'Lacteo',Descripcion:'Yogurt de Fresa Yogoyogo'},
                 {id:7, name:'Arepas Blancas',precio:2000,fecha_vencimiento:'2024/05/12',categoria:'Arepas',Descripcion:'Arepas Blancas de Mote'},
                 {id:8, name:'Gaseosa Uva',precio:3000,fecha_vencimiento:'2025/10/23',categoria:'Gaseosas', Descripcion:'Gasesosa Postobon de Uva'},
                 {id:9, name:'Aceite Grande',precio:15000,fecha_vencimiento:'2024/12/34',categoria:'Aceite', Descripcion:'Tarro de Aceite Grande'},
                 {id:10, name:'Kilo de Carne', precio:22000, fecha_vencimiento:'2024/05/31',categoria:'Carnes',Descripcion:'Kilo de carne de Vaca'},
                 {id:11, name:'Banano', precio:500, fecha_vencimiento:'2026/08/25', categoria:'Frutas', Descripcion:'Amarillo por fuera, blanco por dentro'},
                 {id:12, name:'Six Pack Poker', precio:23000, fecha_vencimiento:'2025/02/20', categoria:'Licores', Descripcion:'Contiene 6 latas de cerveza poker'},
                 {id:13, name:'Ron 8 años', precio:30000, fecha_vencimiento:'2025/05/23', categoria:'Licores', Descripcion:'Media Botella de Ron 8 años'},
                 {id:14, name:'Panela', precio:5300, fecha_vencimiento:'2024/06/23', categoria:'Panela', Descripcion:'Un atado de panela'},
                 {id:15, name:'Sopa Instantanea', precio:4000, fecha_vencimiento:'2025/04/13', categoria:'Sopas Instantaneas', Descripcion:'Sopa instantanea de Pollo'}
];

var carros = [   {id:1, marca:'Mazda',  cilindraje:1.0,tipo:'Electrico',linea:'Mx-30',   color:'Azul',placa:'ABC-454',precio:145000000},
                 {id:2, marca:'Nissan',   cilindraje:2.5,tipo:'Hibrido',linea:'March',  color:'Negro',placa:'KFG-932',precio:42800000},
                 {id:3, marca:'Kia', cilindraje:3.0,tipo:'Electrico',linea:'Picanto',   color:'Gris',placa:'JGS-234',precio:54990000},
                 {id:4, marca:'Mazda',  cilindraje:2.5,tipo:'Hibrida',linea:'CX-90',   color:'Rojo',placa:'OWK-342',precio:286600000},
                 {id:5, marca:'Citroen', cilindraje:1.5,tipo:'Electrico',linea:'Ami',   color:'Blanco',placa:'KSF-323',precio:28647000},
                 {id:6, marca:'Ford', cilindraje:2.0,tipo:'Electrico',linea:'MUstang',   color:'Amarillo',placa:'KFA-243',precio:118750000},
                 {id:7, marca:'Citroen', cilindraje:4.0,tipo:'Hibrido',linea:'C5 Aircross',   color:'Cafe',placa:'DKS-322',precio:153990000},
                 {id:8, marca:'Kia',cilindraje:2.0,tipo:'Electrico',linea:'ProCeed', color:'Morado',placa:'PGL-213',precio:45500000},
                 {id:9, marca:'Mazda', cilindraje:3.0,tipo:'Hibrida',linea:'CX-30', color:'Naranja',placa:'shf342',precio:459900000},
                 {id:10, marca:'Toyota', cilindraje:4.0, tipo:'Electrico', linea:'Fortunner', color:'Negro', placa:'JHD-789',precio:228000000},
                 {id:11, marca:'Nissan', cilindraje:3.0,tipo:'Hibrido', linea:'March 30', color:'Rosado', placa:'HSG-232', precio:120000000},
                 {id:12, marca:'Mercedez-Benz', cilindraje:5.0, tipo:'Electrico', linea:'Convertible', color:'Verde', placa:'DSF-234',precio:234000000},
                 {id:13, marca:'Mitsubichi', cilindraje:3.0,tipo:'Hibrido', linea:'Nativa', color:'Plateada',placa:'HZT-234', precio:142000000},
                 {id:14, marca:'Susuki', cilindraje:2.5,tipo:'Electrico',linea:'Vitara',color:'Blanco',placa:'BNI-215',precio:90000000},
                 {id:15,marca:'Subaru', cilindraje:2.0,tipo:'Hibrido',linea:'Nose', color:'Verde',placa:'HJD-273',precio:343000000}      
];


function carroIva(tipo, precio) {
    let iva;
    if (tipo === 'Electrico') {
      iva = precio * 0.01;
    } else if (tipo === 'Hibrida') {
      if (precio <= 50000000) {
        iva = precio * 0.01;
      } else if (precio <= 100000000) {
        iva = precio * 0.015;
      } else if (precio <= 150000000) {
        iva = precio * 0.025;
      } else {
        iva = precio * 0.035;
      }
    }
    return iva;
  }


//Metodos para los productos

taller.get('/', (req,res)=>{
    res.send('Servidor iniciado correctamente');
})

taller.get('/utiles', (req,res)=>{
    res.json(utiles);
})

taller.get('/utiles/:categoria',(req,res)=>{
  const categoria = req.params.categoria;
  const buscarCategoria = utiles.filter(buscarCategoria => buscarCategoria.categoria == categoria);
  res.json(buscarCategoria);
})

taller.get('/preciosmayores',(req,res)=>{
  res.json(utiles.filter(utiles => utiles.precio > 10000));
})

taller.get('/calcularIva', (req,res)=>{
  const calcularIva = utiles.map(calcularIva => calcularIva.precio * 0.19);
  res.json({utiles: utiles,calcularIva});
})

//Metodos Creados para Productos
taller.get('/utiles/:name/descripcion',(req,res)=>{
  const name= req.params.name;
  const producto = utiles.find(producto => producto.name == name);

  res.json({Descripcion: producto.Descripcion});
})

taller.get('/utiles/:id/name',(req,res)=>{
  const id = req.params.id;

  const buscarId = utiles.find(buscarId => buscarId.id == id);

  res.json({name: buscarId.name});
})

taller.get('/preciosmenores', (req,res)=>{
  res.json(utiles.filter(productos => productos.precio < 5000));
})

taller.get('/utiles/:precio/categoria/name',(req,res)=>{
  const precio = req.params.precio;
  const categoriaRetorno = utiles.find(categoriaRetorno => categoriaRetorno.precio == precio);
  
  res.json({categoria: categoriaRetorno.categoria + ' ' + 'El nombre del producto es:' +categoriaRetorno.name})
})
taller.get('/utiles/:name/fecha_vencimiento',(req,res)=>{
  const name = req.params.name;
  const buscarNombre = utiles.find(buscarNombre => buscarNombre.name== name);

  res.json({fecha_vencimiento: (buscarNombre.fecha_vencimiento)})
})

//Metodos para Carros

taller.get('/carros', (req,res)=>{
  res.json(carros);
})
taller.get('/carros/:marca', (req,res)=>{
const obtenerMarca = req.params.marca;

  const  marcaCarro = carros.filter(marcaCarro => marcaCarro.marca == obtenerMarca);
  res.json(marcaCarro);

})

taller.get('/impuestovehiculos', (req, res) => {
  const vehiculosConImpuestos = carros.map(carro => {
    const impuesto = carroIva(carro.tipo, carro.precio);
    return {carro, impuesto };
 });
  res.json(vehiculosConImpuestos);
});

//METODOS CREADOS PARA CARROS
taller.get('/carros/:id/placa',(req,res)=>{
  const id = req.params.id;
  const buscarId = carros.find(buscarId => buscarId.id == id)
  res.json({
    placa: (buscarId.placa)
  })
})

taller.get('/carritos/:marca/color',(req,res)=>{
  const marca = req.params.marca;
  const buscarMarca = carros.find(buscarMarca => buscarMarca.marca == marca);
  res.json({
    color: (buscarMarca.color)
  })
})

taller.get('/preciosMayor',(req,res)=>{
  const preciosMayores= carros.filter(preciosMayores => preciosMayores.precio >90000000);
  res.json(preciosMayores)
})

taller.get('/carros/:linea/marca',(req,res)=>{
  const linea = req.params.linea;
  const buscarLinea = carros.find(buscarLinea => buscarLinea.linea == linea);
  res.json({marca: buscarLinea.marca})
})

taller.get('/carros/:linea/cilindraje',(req,res)=>{
  const linea = req.params.linea;
  const buscarLinea = carros.find(buscarTipo =>buscarTipo.linea == linea);
  res.json({cilindraje: buscarLinea.cilindraje})
})



taller.listen(port, ()=>{
    console.log(`El servidor a sido iniciado en http://localhost:${port}`);
})