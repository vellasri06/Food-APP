import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cartdetails.service';
import { MenuService } from 'src/app/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  selected = 'All';
  searchText = '';
  selectedItem: any = null;
  showPopup = false;
  isAdmin = false;
  constructor(
    private router: Router,
    public cs: CartService,
    private menuService: MenuService
  ) { }
  removedItems: any[] = [];
  menuItems: any[] = [];
  extraMenu: any[] = [];
  deletedOptions: any = {};
  lastDeletedItem: string = "";
  hiddenItems: string[] = JSON.parse(localStorage.getItem('hiddenItems') || '[]');
  ngOnInit() {
    this.isAdmin = localStorage.getItem("role") === "admin";
      this.hiddenItems = JSON.parse(localStorage.getItem("hiddenItems") || "[]");

    this.removedItems = JSON.parse(localStorage.getItem('removedItems') || '[]');
    this.menuService.menu$.subscribe((data: any[]) => {
      this.menuItems = data;

    });
      let data = localStorage.getItem("deletedOptions");
  if (data) {
    this.deletedOptions = JSON.parse(data);
  }
  }
  filter(cat: string) {
    this.selected = cat;
  }

  addToCart(name: string, price: number) {

    this.cs.add(name, price);

  }
  openPopup(name: string, event?: Event) {

    if (event) {
      event.stopPropagation();
    }

    // ✅ CHECK ADMIN ITEMS FIRST
    const dynamicItem = this.menuItems.find(i => i.name === name);

    if (dynamicItem) {
      this.selectedItem = dynamicItem;
      this.showPopup = true;   // ⭐ IMPORTANT (YOU MISSED THIS)
      return;
    }
    if (name === 'Shawarma') {
      this.selectedItem = {
        name: 'Shawarma',
        options: [
          {
            name: 'Veg Shawarma',
            price: 199,
            type: 'veg',
            img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2025/01/paneer-shawarma-recipe-1.jpg',
            rating: 4.2
          },
          {
            name: 'Chicken Shawarma',
            price: 299,
            type: 'nonveg',
            img: 'https://tse4.mm.bing.net/th?id=OIP.O_36KDxDkOxsfoSpb5yzjQHaEK&pid=Api',
            rating: 4.5
          },
          {
            name: 'Special Shawarma',
            price: 349,
            type: 'nonveg',
            img: 'https://b.zmtcdn.com/data/pictures/chains/0/18696050/11dc446a67c3bd6312d61ebfaf6b487d.jpg?fit=around|750:500&crop=750:500;*,*',
            rating: 4.7
          }
        ]
      };
    }
    else if (name == 'Chicken Biryani') {
      this.selectedItem = {
        name: 'Chicken Biryani',
        options: [
          {
            name: 'Chicken Dum Biryani',
            price: 299,
            type: 'nonveg',
            img: 'https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800',
            rating: 4.5
          },
          {
            name: 'Fry Piece Biryani',
            price: 320,
            type: 'nonveg',
            img: 'https://i.ytimg.com/vi/ySPhGVskTnc/maxresdefault.jpg',
            rating: 4.3
          },
          {
            name: 'Boneless Chicken Biryani',
            price: 349,
            type: 'nonveg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53JJH0pZzqgaDob7kLNRvL450BA6RU87eqA&s',
            rating: 4.6
          },
          {
            name: 'Chicken 65 Biryani',
            price: 329,
            type: 'nonveg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MsxFZzu_7HUKpkIt3YseLumM0gOPqsurSA&s',
            rating: 4.4
          },
          {
            name: 'Special Chicken Biryani',
            price: 399,
            type: 'nonveg',
            img: 'https://www.chenabgourmet.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-29-at-2.37.55-PM.jpeg',
            rating: 4.7
          },
          {
            name: 'Family Pack Chicken Biryani',
            price: 699,
            type: 'nonveg',
            img: 'https://b.zmtcdn.com/data/dish_photos/95e/9a70e9914fdbe6f6547fdb9d9b3c995e.jpg',
            rating: 4.6
          }
        ]
      };
    }
    else if (name == 'Veg Biryani') {
      this.selectedItem = {
        name: 'Veg Biryani',
        options: [
          {
            name: 'Veg Dum Biryani',
            price: 99,
            type: 'veg',
            img: 'https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg',
            rating: 4.5
          },
          {
            name: 'Panner Biryani',
            price: 220,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OZQ2lnwk0jSO3ldFNfb4D5gbOn5tqYOrIQ&s',
            rating: 4.3
          },
          {
            name: 'Mushroom Biryani',
            price: 249,
            type: 'veg',
            img: 'https://vaya.in/recipes/wp-content/uploads/2018/03/Mushroom-Biryani.jpg',
            rating: 4.6
          }
        ]
      };
    }
    else if (name == 'French Fries') {
      this.selectedItem = {
        name: 'French Fries',
        options: [
          {
            name: 'Classic Salted Fries',
            price: 99,
            type: 'veg',
            img: 'https://www.crazycheesy.com/wp-content/uploads/2023/01/FRENCH-FRIES-CLASSIC-SALTED.jpg',
            rating: 4.2
          },
          {
            name: 'Peri Peri Fries',
            price: 119,
            type: 'veg',
            img: 'https://rppizzeria.com/web/image/product.template/206/image_1024?unique=142cabe',
            rating: 4.4
          },
          {
            name: 'Cheese Loaded Fries',
            price: 149,
            type: 'veg',
            img: 'https://thumbs.dreamstime.com/b/peri-french-fries-cheese-255297954.jpg',
            rating: 4.6
          },
          {
            name: 'Mayo Loaded Fries',
            price: 139,
            type: 'veg',
            img: 'https://www.unileverfoodsolutions.co.za/dam/global-ufs/mcos/SOUTH-AFRICA/calcmenu/recipes/ZA-recipes/ufs-knorr-prego-sauce-launch/prego-chicken-mayo-fully-loaded-fries-main-header.jpg',
            rating: 4.3
          },
          {
            name: 'Chicken Loaded Fries',
            price: 179,
            type: 'nonveg',
            img: 'https://mastersofkitchen.com/wp-content/uploads/2025/06/Chicken-Loaded-Fries-896x896.webp',
            rating: 4.7
          },
          {
            name: 'Ultimate Overloaded Fries',
            price: 199,
            type: 'nonveg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHdznCrdfH-FJFmT8fUGK-zVzdt5dCIpXqg&s',
            rating: 4.8
          }
        ]
      };
    }
    else if (name == 'Chocolate Cake') {
      this.selectedItem = {
        name: 'Chocolate Cake',
        options: [
          {
            name: 'Classic Chocolate Cake',
            price: 99,
            type: 'veg',
            img: 'https://joyfoodsunshine.com/wp-content/uploads/2020/08/best-chocolate-cake-recipe-9.jpg',
            rating: 4.3
          },
          {
            name: 'Chocolate Truffle Cake',
            price: 129,
            type: 'nonveg',
            img: 'https://thebrowniestudio.com/cdn/shop/files/12_a0e18805-5e29-4619-ba3d-867d91abb1c8.jpg?v=1706260657',
            rating: 4.6
          },
          {
            name: 'Red Velvet Cake',
            price: 249,
            type: 'nonveg',
            img: 'https://www.freshsavory.com/wp-content/uploads/2025/09/red-velvet-cake.jpg',
            rating: 4.7
          },
          {
            name: 'Black Forest Cake',
            price: 359,
            type: 'veg',
            img: 'https://cakebee.in/cdn/shop/files/DSC06157_dc2bc3fe-0b76-4402-bb20-a48dfc5ea2a4.jpg?v=1703588115',
            rating: 4.5
          },
          {
            name: 'Choco Chips Cake',
            price: 259,
            type: 'veg',
            img: 'https://storeassets.im-cdn.com/temp/bulk_operations/bakerstreetnoida/1707954151/EgglessChocoChipCake_0x0_webp.jpg',
            rating: 4.4
          },
          {
            name: 'Premium Chocolate Delight',
            price: 499,
            type: 'veg',
            img: 'https://cdnnew.igp.com/f_auto,q_auto,t_pnopt20prodlp/products/p-premium-chocolate-delight-cake-402226-m.jpg',
            rating: 4.8
          }
        ]
      };
    }
    else if (name == 'Sprite') {
      this.selectedItem = {
        name: 'Sprite',
        options: [
          {
            name: 'Sprite 250ml',
            price: 30,
            type: 'veg',
            img: 'https://www.bbassets.com/media/uploads/p/l/402837_1-sprite-soft-drink.jpg',
            rating: 4.2
          },
          {
            name: 'Sprite 500ml',
            price: 50,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPI2bZqoREzqmAde8axWmelpFUv3BMDumsQ&s',
            rating: 4.4
          },
          {
            name: 'Sprite 1L Bottle',
            price: 80,
            type: 'veg',
            img: 'https://image.cdn.shpy.in/143849/1665223711409_SKU-0307_0.png?width=600&format=webp',
            rating: 4.5
          },
          {
            name: 'Chilled Sprite with Ice',
            price: 40,
            type: 'veg',
            img: 'https://www.shutterstock.com/image-photo/poznan-pol-apr-02-2025-260nw-2609175503.jpg',
            rating: 4.3
          },
          {
            name: 'Sprite + Lemon Twist',
            price: 60,
            type: 'veg',
            img: 'https://erp.adgully.com/artical_image/8ee026bced12cc5a09eb0477bd2a31f3.jpeg',
            rating: 4.6
          },
          {
            name: 'Sprite Combo (Fries + Sprite)',
            price: 120,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOrt4HHZaYyNNKxRogMOGM4N6EKmu9CN3MQ&s',
            rating: 4.7
          }
        ]
      };
    }
    else if (name == 'Fried Rice') {
      this.selectedItem = {
        name: 'Fried Rice',
        options: [
          {
            name: 'Veg Fried Rice',
            price: 120,
            type: 'veg',
            img: 'https://www.sharmispassions.com/wp-content/uploads/2011/01/VegFriedRice2.jpg',
            rating: 4.3
          },
          {
            name: 'Egg Fried Rice',
            price: 140,
            type: 'nonveg',
            img: 'https://i.ytimg.com/vi/gwk3gM05zsQ/maxresdefault.jpg',
            rating: 4.4
          },
          {
            name: 'Chicken Fried Rice',
            price: 180,
            type: 'nonveg',
            img: 'https://iamhomesteader.com/wp-content/uploads/2025/05/Bang-Bang-Chicken-Fried-Rice-2.jpg',
            rating: 4.6
          },
          {
            name: 'Paneer Fried Rice',
            price: 160,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWn0fvycInvtN4Y_P5IBme4QjjRlRHKGAR3g&s',
            rating: 4.5
          },
          {
            name: 'Schezwan Fried Rice',
            price: 170,
            type: 'veg',
            img: 'https://www.sharmispassions.com/wp-content/uploads/2014/11/SchezwanFriedRice5.jpg',
            rating: 4.4
          },
          {
            name: 'Mixed Fried Rice (Chicken + Egg)',
            price: 200,
            type: 'nonveg',
            img: 'https://i.ytimg.com/vi/1MM8aYI-nqg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCaNOYqFFKeB4gl_GfnZqMZ_g6-Vw',
            rating: 4.7
          }
        ]
      };
    }
    else if (name == 'pizza') {
      this.selectedItem = {
        name: 'Pizza',
        options: [
          {
            name: 'Margherita Pizza',
            price: 149,
            type: 'veg',
            img: 'https://www.rakijagrill.com/wp-content/uploads/2020/07/Margherita-.jpg',
            rating: 4.3
          },
          {
            name: 'Veg Loaded Pizza',
            price: 179,
            type: 'veg',
            img: 'https://dukaan.b-cdn.net/1000x1000/webp/20723/5ae5ca5a-accb-4288-9686-b2c7f93cfdc0/1610550992786.jpeg',
            rating: 4.5
          },
          {
            name: 'Paneer Tikka Pizza',
            price: 199,
            type: 'veg',
            img: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/8a2a20dea69f28db9e594e401ac1b7d1/Derivates/720ec23123e2c4d12baef9fcdd9ce8b5086238d4.jpg',
            rating: 4.6
          },
          {
            name: 'Chicken Pizza',
            price: 219,
            type: 'nonveg',
            img: 'https://www.allrecipes.com/thmb/ee0daLeNNIUcrKbm5nxwFXheMDM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg',
            rating: 4.4
          },
          {
            name: 'Pepperoni Pizza',
            price: 249,
            type: 'nonveg',
            img: 'https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_6240,h_4160,al_c,q_90/Pepperoni%20Pizza_1_compressed.jpg',
            rating: 4.7
          },
          {
            name: 'Cheese Burst Pizza',
            price: 229,
            type: 'veg',
            img: 'https://b.zmtcdn.com/data/dish_photos/efa/f284fe9684805a866d196b3a8dcc8efa.jpeg',
            rating: 4.8
          }
        ]
      };
    }
    else if (name == 'Chicken Hot Pie') {
      this.selectedItem = {
        name: 'Chicken Hot Pie',
        options: [
          {
            name: 'Classic Chicken Hot Pie',
            price: 199,
            type: 'nonveg',
            img: 'https://www.cookingclassy.com/wp-content/uploads/2017/10/shortcut-chicken-pot-pie-8.jpg',
            rating: 4.3
          },
          {
            name: 'Creamy Chicken Pie',
            price: 229,
            type: 'nonveg',
            img: 'https://www.thecookingcollective.com.au/wp-content/uploads/2023/10/creamy-chicken-pies-4.jpg',
            rating: 4.5
          },
          {
            name: 'Spicy Chicken Pie',
            price: 219,
            type: 'nonveg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQ_xRm_T1pOBTh2Nq1aAaIAQx2JfVDlDuiw&s',
            rating: 4.4
          },
          {
            name: 'Cheese Chicken Pie',
            price: 249,
            type: 'nonveg',
            img: 'https://www.errenskitchen.com/wp-content/uploads/2025/01/Cheesy-Chicken-Pot-Pie-with-Puff-Pastry-5.jpg',
            rating: 4.6
          },
          {
            name: 'Chicken Mushroom Pie',
            price: 259,
            type: 'nonveg',
            img: 'https://vikalinka.com/wp-content/uploads/2023/10/Chicken-and-Mushroom-Pie-11-Edit.jpg',
            rating: 4.5
          },
          {
            name: 'Special Chicken Deluxe Pie',
            price: 299,
            type: 'nonveg',
            img: 'https://i.ytimg.com/vi/41Kt91N4K34/maxresdefault.jpg',
            rating: 4.7
          }
        ]
      };
    }
    else if (name == 'Fried Chicken') {
      this.selectedItem = {
        name: 'Fried Chicken',
        options: [
          {
            name: 'Classic Fried Chicken',
            price: 149,
            type: 'nonveg',
            img: 'https://shorelunch.com/wp-content/uploads/2020/04/SL_Chicken-breading_A.jpg',
            rating: 4.4
          },
          {
            name: 'Crispy Fried Chicken',
            price: 179,
            type: 'nonveg',
            img: 'https://www.allrecipes.com/thmb/q-IfK20zxeyp1DgKWhrVp6CQ43w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-89268-triple-dipped-fried-chicken-beauty-4x3-3961ac838ddd41958e7cb9f49376cd68.jpg',
            rating: 4.6
          },
          {
            name: 'Spicy Fried Chicken',
            price: 169,
            type: 'nonveg',
            img: 'https://i.ytimg.com/vi/XnLWBoZn710/maxresdefault.jpg',
            rating: 4.5
          },
          {
            name: 'Peri Peri Chicken',
            price: 199,
            type: 'nonveg',
            img: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/04/1-14-500x500.jpeg',
            rating: 4.7
          },
          {
            name: 'Chicken Wings (6 pcs)',
            price: 189,
            type: 'nonveg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiqOFM1YO3hL5UjJX1aEW2_cGI5LdmfLXJg&s',
            rating: 4.6
          },
          {
            name: 'Fried Chicken Bucket',
            price: 399,
            type: 'nonveg',
            img: 'https://thumbs.dreamstime.com/b/crispy-fried-chicken-bucket-splashes-fast-food-restaurant-menu-photo-white-overflowing-drumsticks-some-flying-338346988.jpg',
            rating: 4.8
          }
        ]
      };
    }
    else if (name == 'French Fries') {
      this.selectedItem = {
        name: 'French Fries',
        options: [
          {
            name: 'Classic Salted Fries',
            price: 99,
            type: 'veg',
            img: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/French_Fries.JPG',
            rating: 4.2
          },
          {
            name: 'Peri Peri Fries',
            price: 119,
            type: 'veg',
            img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/peri-peri-fries.jpg',
            rating: 4.4
          },
          {
            name: 'Cheese Loaded Fries',
            price: 149,
            type: 'veg',
            img: 'https://i.ytimg.com/vi/2mRk3N1qJp8/maxresdefault.jpg',
            rating: 4.6
          },
          {
            name: 'Mayo Loaded Fries',
            price: 139,
            type: 'veg',
            img: 'https://static.toiimg.com/thumb/84784534.cms?width=1200&height=900',
            rating: 4.3
          },
          {
            name: 'Chicken Loaded Fries',
            price: 179,
            type: 'nonveg',
            img: 'https://www.cookwithmanali.com/wp-content/uploads/2019/06/Loaded-Fries.jpg',
            rating: 4.7
          },
          {
            name: 'Ultimate Overloaded Fries',
            price: 199,
            type: 'nonveg',
            img: 'https://hips.hearstapps.com/hmg-prod/images/delish-loaded-fries-1-1542131236.jpg',
            rating: 4.8
          }
        ]
      };
    }
    else if (name == 'Chocolate Cake') {
      this.selectedItem = {
        name: 'Chocolate Cake',
        options: [
          {
            name: 'Classic Chocolate Cake',
            price: 99,
            type: 'veg',
            img: 'https://joyfoodsunshine.com/wp-content/uploads/2020/08/best-chocolate-cake-recipe-9.jpg',
            rating: 4.3
          },
          {
            name: 'Chocolate Truffle Cake',
            price: 129,
            type: 'veg',
            img: 'https://www.floweraura.com/blog/wp-content/uploads/2020/08/chocolate-truffle-cake.jpg',
            rating: 4.6
          },
          {
            name: 'Chocolate Lava Cake',
            price: 149,
            type: 'veg',
            img: 'https://www.wearetateandlylesugars.com/wp-content/uploads/2023/07/Chocolate-Lava-Cake-500-x-400_1.png',
            rating: 4.7
          },
          {
            name: 'Black Forest Cake',
            price: 159,
            type: 'veg',
            img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/09/black-forest-cake.jpg',
            rating: 4.5
          },
          {
            name: 'Choco Chips Cake',
            price: 119,
            type: 'veg',
            img: 'https://bakewithshivesh.com/wp-content/uploads/2020/05/IMG_3434-scaled.jpg',
            rating: 4.4
          },
          {
            name: 'Premium Chocolate Delight',
            price: 199,
            type: 'veg',
            img: 'https://www.cakehut.in/image/cache/catalog/2022%20cake%20photos/Chocolate%20Delight-600x600.jpg',
            rating: 4.8
          }
        ]
      };
    }
    else if (name == 'Sprite') {
      this.selectedItem = {
        name: 'Sprite',
        options: [
          {
            name: 'Sprite 250ml',
            price: 30,
            type: 'veg',
            img: 'https://www.coca-cola.com/content/dam/onexp/in/en/brands/sprite/250ml.png',
            rating: 4.2
          },
          {
            name: 'Sprite 500ml',
            price: 50,
            type: 'veg',
            img: 'https://www.bigbasket.com/media/uploads/p/l/40094158_5-sprite-soft-drink.jpg',
            rating: 4.4
          },
          {
            name: 'Sprite 1L Bottle',
            price: 80,
            type: 'veg',
            img: 'https://m.media-amazon.com/images/I/61Hk9zB0zML._SL1500_.jpg',
            rating: 4.5
          },
          {
            name: 'Chilled Sprite with Ice',
            price: 40,
            type: 'veg',
            img: 'https://www.shutterstock.com/image-photo/glass-cold-soda-ice-cubes-260nw-1720780852.jpg',
            rating: 4.3
          },
          {
            name: 'Sprite + Lemon Twist',
            price: 60,
            type: 'veg',
            img: 'https://www.acouplecooks.com/wp-content/uploads/2021/05/Lemon-Soda-002.jpg',
            rating: 4.6
          },
          {
            name: 'Sprite Combo (Fries + Sprite)',
            price: 120,
            type: 'veg',
            img: 'https://static.toiimg.com/thumb/84784534.cms?width=1200&height=900',
            rating: 4.7
          }
        ]
      };
    }
    else if (name == 'Fried Rice') {
      this.selectedItem = {
        name: 'Fried Rice',
        options: [
          {
            name: 'Veg Fried Rice',
            price: 120,
            type: 'veg',
            img: 'https://www.sharmispassions.com/wp-content/uploads/2011/01/VegFriedRice2.jpg',
            rating: 4.3
          },
          {
            name: 'Egg Fried Rice',
            price: 140,
            type: 'nonveg',
            img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-fried-rice.jpg',
            rating: 4.4
          },
          {
            name: 'Chicken Fried Rice',
            price: 180,
            type: 'nonveg',
            img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Fried-Rice-Recipe.jpg',
            rating: 4.6
          },
          {
            name: 'Paneer Fried Rice',
            price: 160,
            type: 'veg',
            img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/paneer-fried-rice-1.jpg',
            rating: 4.5
          },
          {
            name: 'Schezwan Fried Rice',
            price: 170,
            type: 'veg',
            img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/schezwan-fried-rice.jpg',
            rating: 4.4
          },
          {
            name: 'Mixed Fried Rice (Chicken + Egg)',
            price: 200,
            type: 'nonveg',
            img: 'https://www.kannammacooks.com/wp-content/uploads/chicken-egg-fried-rice-recipe-1.jpg',
            rating: 4.7
          }
        ]
      };
    }
    else if (name == 'pizza') {
      this.selectedItem = {
        name: 'Pizza',
        options: [
          {
            name: 'Margherita Pizza',
            price: 149,
            type: 'veg',
            img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Margherita_Originale.jpg',
            rating: 4.3
          },
          {
            name: 'Veg Loaded Pizza',
            price: 179,
            type: 'veg',
            img: 'https://www.dominos.co.in/files/items/loaded_veg_pizza.jpg',
            rating: 4.5
          },
          {
            name: 'Paneer Tikka Pizza',
            price: 199,
            type: 'veg',
            img: 'https://www.cookwithmanali.com/wp-content/uploads/2020/07/Paneer-Tikka-Pizza.jpg',
            rating: 4.6
          },
          {
            name: 'Chicken Pizza',
            price: 219,
            type: 'nonveg',
            img: 'https://www.simplyrecipes.com/thmb/6L6Gd9Rk8uWvH1gk1iY0qF0Jx5g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pepperoni-Pizza-LEAD-06-8a1c02d8f51f4c4bb7a8b8a6c2c1b9a9.jpg',
            rating: 4.4
          },
          {
            name: 'Pepperoni Pizza',
            price: 249,
            type: 'nonveg',
            img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg',
            rating: 4.7
          },
          {
            name: 'Cheese Burst Pizza',
            price: 229,
            type: 'veg',
            img: 'https://www.dominos.co.in/files/items/cheese_burst.jpg',
            rating: 4.8
          }
        ]
      };
    }
    else if (name == 'Chicken Hot Pie') {
      this.selectedItem = {
        name: 'Chicken Hot Pie',
        options: [
          {
            name: 'Classic Chicken Hot Pie',
            price: 199,
            type: 'nonveg',
            img: 'https://www.cookingclassy.com/wp-content/uploads/2017/10/shortcut-chicken-pot-pie-8.jpg',
            rating: 4.3
          },
          {
            name: 'Creamy Chicken Pie',
            price: 229,
            type: 'nonveg',
            img: 'https://www.recipetineats.com/tachyon/2018/09/Chicken-Pot-Pie_0-SQ.jpg',
            rating: 4.5
          },
          {
            name: 'Spicy Chicken Pie',
            price: 219,
            type: 'nonveg',
            img: 'https://www.simplyrecipes.com/thmb/Vs8oG3pF3v9m3nS9r8k2L9l9q7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chicken-Pot-Pie-LEAD-2-0a1c6c0a7b1b4e7e8a5c9c6c7c8d9e1f.jpg',
            rating: 4.4
          },
          {
            name: 'Cheese Chicken Pie',
            price: 249,
            type: 'nonveg',
            img: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/02/Chicken-and-Leek-Pie-square-FS-32.jpg',
            rating: 4.6
          },
          {
            name: 'Chicken Mushroom Pie',
            price: 259,
            type: 'nonveg',
            img: 'https://www.taste.com.au/images/recipes/agt/2011/09/chicken-mushroom-pie-1193_l.jpeg',
            rating: 4.5
          },
          {
            name: 'Special Chicken Deluxe Pie',
            price: 299,
            type: 'nonveg',
            img: 'https://www.recipetineats.com/tachyon/2018/09/Chicken-Pot-Pie_3-SQ.jpg',
            rating: 4.7
          }
        ]
      };
    }
    else if (name == 'Fried Chicken') {
      this.selectedItem = {
        name: 'Fried Chicken',
        options: [
          {
            name: 'Classic Fried Chicken',
            price: 149,
            type: 'nonveg',
            img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Fried-Chicken.jpg',
            rating: 4.4
          },
          {
            name: 'Crispy Fried Chicken',
            price: 179,
            type: 'nonveg',
            img: 'https://www.simplyrecipes.com/thmb/kxRkO5M9X6l1qV8wJ0vH3c9zV9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Crispy-Fried-Chicken-LEAD-05-1c7c0d4a3a7c4a3a9a8a7d9c1b0d6e5c.jpg',
            rating: 4.6
          },
          {
            name: 'Spicy Fried Chicken',
            price: 169,
            type: 'nonveg',
            img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/fried-chicken-recipe.jpg',
            rating: 4.5
          },
          {
            name: 'Peri Peri Chicken',
            price: 199,
            type: 'nonveg',
            img: 'https://www.cookwithmanali.com/wp-content/uploads/2019/08/Peri-Peri-Chicken.jpg',
            rating: 4.7
          },
          {
            name: 'Chicken Wings (6 pcs)',
            price: 189,
            type: 'nonveg',
            img: 'https://www.recipetineats.com/tachyon/2020/01/Crispy-Baked-Chicken-Wings_5-SQ.jpg',
            rating: 4.6
          },
          {
            name: 'Fried Chicken Bucket',
            price: 399,
            type: 'nonveg',
            img: 'https://www.kfc.co.in/Content/OnlineOrderingImages/Menu/Items/ChickenBucket.jpg',
            rating: 4.8
          }
        ]
      };
    }
    else if (name == 'Biscuits') {
      this.selectedItem = {
        name: 'Biscuits',
        options: [
          {
            name: 'Marie Biscuits',
            price: 10,
            type: 'veg',
            img: 'https://cdn.shopaccino.com/edible-smart/products/71onn1kqmblsl1400-535087_l.jpg?v=704',
            rating: 4.2
          },
          {
            name: 'Good Day Biscuits',
            price: 20,
            type: 'veg',
            img: 'https://www.bbassets.com/media/uploads/p/l/100012341_19-britannia-good-day-butter-cookies.jpg',
            rating: 4.4
          },
          {
            name: 'Oreo Biscuits',
            price: 30,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxGlNtdwLmbSpx7pDex9jxyFgdx5NPvYvjw&s',
            rating: 4.6
          },
          {
            name: 'Hide & Seek',
            price: 35,
            type: 'veg',
            img: 'https://regalplus.com/cdn/shop/files/hidenseekbis.jpg?v=1736527557&width=1080',
            rating: 4.5
          },
          {
            name: 'Milk Bikis',
            price: 15,
            type: 'veg',
            img: 'https://media.britannia.co.in/small_Milk_Bikis_Style_2b410c958c.png',
            rating: 4.3
          },
          {
            name: 'Chocolate Cream Biscuits',
            price: 25,
            type: 'veg',
            img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2026/4/17/fb13e1c2-0ab3-4275-953e-42c562bf93c3_970_1_MN_d7757033-c412-4a52-8e86-56e33a0c109c.jpg',
            rating: 4.4
          }
        ]
      };
    }
    else if (name == 'Mashed Potatoes') {
      this.selectedItem = {
        name: 'Mashed Potatoes',
        options: [
          {
            name: 'Classic Mashed Potatoes',
            price: 99,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8yuNkOnHvBfI7pMrmY3vHJw5Wu2sONdi6A&s',
            rating: 4.3
          },
          {
            name: 'Butter Mashed Potatoes',
            price: 119,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyi2q7jOPDqLssIuRSPt6Nx_fcKS2egBN7Vw&s',
            rating: 4.5
          },
          {
            name: 'Cheesy Mashed Potatoes',
            price: 139,
            type: 'veg',
            img: 'https://www.yellowblissroad.com/wp-content/uploads/2019/09/Cheesy-Mashed-Potatoes-social.jpg',
            rating: 4.6
          },
          {
            name: 'Garlic Mashed Potatoes',
            price: 129,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oqaEHoOCNp0wRXJzytFNELPgGIg6WuuZ1Q&s',
            rating: 4.4
          },
          {
            name: 'Creamy Herb Mashed Potatoes',
            price: 149,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR35UCjC6jVe8mNpaaIvpN84JaKMgGG9snUDw&s',
            rating: 4.5
          },
          {
            name: 'Loaded Mashed Potatoes',
            price: 169,
            type: 'veg',
            img: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-11-loaded-mashed-potatoes%2Floaded-mashed-potatoes-4',
            rating: 4.7
          }
        ]
      };
    }
    else if (name == 'Lasagna') {
      this.selectedItem = {
        name: 'Lasagna',
        options: [
          {
            name: 'Veg Lasagna',
            price: 199,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJnlk_nX2yr19A5OYUJaohq5TrkvWFhYpuw&s',
            rating: 4.4
          },
          {
            name: 'Cheese Lasagna',
            price: 229,
            type: 'veg',
            img: 'https://assets.epicurious.com/photos/6508a14155b19af4200459c7/1:1/w_2900,h_2900,c_limit/Sausage-Cheese-Basil-Lasanga_RECIPE.jpg',
            rating: 4.6
          },
          {
            name: 'Paneer Lasagna',
            price: 249,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWvpM4s4F80j0mV9hsW3lSNqKJDHo9uoWRA&s',
            rating: 4.5
          },
          {
            name: 'Chicken Lasagna',
            price: 279,
            type: 'nonveg',
            img: 'https://www.foodandwine.com/thmb/EUA6L1uauu2ykNb-WMb9C8YG9LE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201404-xl-easy-chicken-lasagna-33bb0d845642489b8828288b1763c2eb.jpg',
            rating: 4.6
          },
          {
            name: 'Beef Lasagna',
            price: 299,
            type: 'nonveg',
            img: 'https://www.recipetineats.com/tachyon/2017/05/Lasagne-recipe-3-main-square.jpg',
            rating: 4.7
          },
          {
            name: 'Special Loaded Lasagna',
            price: 349,
            type: 'nonveg',
            img: 'https://natashaskitchen.com/wp-content/uploads/2022/09/Lasagna-SQ-2.jpg',
            rating: 4.8
          }
        ]
      };
    }
    else if (name == 'potato nuggets') {
      this.selectedItem = {
        name: 'Potato Nuggets',
        options: [
          {
            name: 'Classic Nuggets',
            price: 199,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5Ksi-w00BlHJcvFihcS1wp7ogFVKaSHOxQ&s',
            rating: 4.2
          },
          {
            name: 'Cheese Filled Nuggets',
            price: 249,
            type: 'veg',
            img: 'https://i.ytimg.com/vi/2QbIP7JVYMA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD9DUPOfnSrw7I4he7nah_UBC7RNg',
            rating: 4.5
          },
          {
            name: 'Peri Peri Nuggets',
            price: 229,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnoSqc-eXU5T4DB2DCdC81tagbb2Rj6b9Bg&s',
            rating: 4.4
          },
          {
            name: 'Loaded Nuggets',
            price: 279,
            type: 'veg',
            img: 'https://www.afpllc.com/wp-content/uploads/AFP_Nashville_Nuggets_final_4C-300-840x560.png',
            rating: 4.6
          }
        ]
      };
    }
    else if (name == 'burger') {
      this.selectedItem = {
        name: 'Burger',
        options: [
          {
            name: 'Classic Veg Burger',
            price: 149,
            type: 'veg',
            img: 'https://img.freepik.com/free-photo/front-view-chicken-sandwich-with-green-salad-vegetables-inside-with-french-fries-beans-lemon-white-desk_140725-38034.jpg?semt=ais_hybrid&w=740&q=80https://tse3.mm.bing.net/th?id=OIP.y5CYrhnDFf6FbzCw7pCVWgHaE8&pid=Api',
            rating: 4.2
          },
          {
            name: 'Cheese Burger',
            price: 179,
            type: 'veg',
            img: 'https://cdn.uengage.io/uploads/28289/image-B3J6H7-1743169781.jpg',
            rating: 4.4
          },
          {
            name: 'Chicken Burger',
            price: 199,
            type: 'nonveg',
            img: 'https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_574607542.jpg',
            rating: 4.5
          },
          {
            name: 'Double Patty Burger',
            price: 249,
            type: 'nonveg',
            img: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-tall-FS-38.webp',
            rating: 4.7
          }
        ]
      };
    }
    else if (name == 'Alfredo Pasta') {
      this.selectedItem = {
        name: 'Alfredo Pasta',
        options: [
          {
            name: 'Veg Alfredo Pasta',
            price: 229,
            type: 'veg',
            img: 'https://www.sharmispassions.com/wp-content/uploads/2015/12/alfredopasta5-500x500.jpg',
            rating: 4.3
          },
          {
            name: 'Cheese Alfredo Pasta',
            price: 249,
            type: 'veg',
            img: 'https://www.simplyquinoa.com/wp-content/uploads/2024/10/cottage-cheese-alfredo-sauce-15.jpg',
            rating: 4.5
          },
          {
            name: 'Chicken Alfredo Pasta',
            price: 279,
            type: 'nonveg',
            img: 'https://gimmedelicious.com/wp-content/uploads/2024/10/Skinny-Chicken-Broccoli-Alfredo-1.jpg',
            rating: 4.6
          },
          {
            name: 'Spicy Alfredo Pasta',
            price: 259,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Njy2CtGAroAOto2NkQjc63OfGxikSSCQpg&s',
            rating: 4.4
          }
        ]
      };
    }
    else if (name == 'Samosa') {
      this.selectedItem = {
        name: 'Samosa',
        options: [
          {
            name: 'Classic Aloo Samosa-6',
            price: 20,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYXBG4c4BsyyssXKix3ctaQy1JLC9DjYAiw&s',
            rating: 4.3
          },
          {
            name: 'Paneer Samosa-4',
            price: 30,
            type: 'veg',
            img: 'https://rashmisweets.in/wp-content/uploads/2024/07/Paneer-Samosa.png',
            rating: 4.5
          },
          {
            name: 'Cheese Corn Samosa-4',
            price: 35,
            type: 'veg',
            img: 'https://cdn.uengage.io/uploads/31763/image-CPYC3X-1697027504.jpg',
            rating: 4.4
          },
          {
            name: 'Chicken Samosa',
            price: 40,
            type: 'nonveg',
            img: 'https://www.whiskaffair.com/wp-content/uploads/2014/07/Chicken-Samosa-1-3.jpg',
            rating: 4.6
          }
        ]
      };
    }
    else if (name == 'Puff') {
      this.selectedItem = {
        name: 'Puff',
        options: [
          {
            name: 'Veg Puff',
            price: 20,
            type: 'veg',
            img: 'https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1-1.jpg',
            rating: 4.2
          },
          {
            name: 'Paneer Puff',
            price: 30,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpX3ETF-doy85BlpH2c5k5Sgkf9C99IxBQ4g&s',
            rating: 4.4
          },
          {
            name: 'Egg Puff',
            price: 35,
            type: 'nonveg',
            img: 'https://www.sharmispassions.com/wp-content/uploads/2025/11/egg-puffs4.jpg',
            rating: 4.5
          },
          {
            name: 'Chicken Puff',
            price: 40,
            type: 'nonveg',
            img: 'https://vaya.in/recipes/wp-content/uploads/2018/02/chicken_puff.jpg',
            rating: 4.6
          }
        ]
      };
    }
    else if (name == 'Nachos') {
      this.selectedItem = {
        name: 'Nachos',
        options: [
          {
            name: 'Classic Salted Nachos',
            price: 149,
            type: 'veg',
            img: 'https://m.media-amazon.com/images/I/51iQZ5VfNLL.jpg',
            rating: 4.2
          },
          {
            name: 'Cheese Loaded Nachos',
            price: 179,
            type: 'veg',
            img: 'https://www.oetker.in/assets/recipes/assets/b72049329c8742b98daf790c9ef937bd/1272x764/loaded-nachos.jpg',
            rating: 4.5
          },
          {
            name: 'Peri Peri Nachos',
            price: 169,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqjAMIqdWBgyfQV-vc51t1c6TVU-fMjylgg&s',
            rating: 4.4
          },
          {
            name: 'Chicken Nachos',
            price: 199,
            type: 'nonveg',
            img: 'https://www.recipetineats.com/tachyon/2019/06/Chicken-Nachos_3.jpg',
            rating: 4.6
          }
        ]
      };
    }
    else if (name == 'Ice Cream') {
      this.selectedItem = {
        name: 'Ice Cream',
        options: [
          {
            name: 'Vanilla Ice Cream',
            price: 70,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0lEhTo29DzmOliZ_2RRI-LAI_mx3dUIEqg&s',
            rating: 4.3
          },
          {
            name: 'Chocolate Ice Cream',
            price: 80,
            type: 'veg',
            img: 'https://5.imimg.com/data5/SELLER/Default/2024/11/466046731/BJ/OW/AM/25855280/chocolate-ice-cream.jpeg',
            rating: 4.5
          },
          {
            name: 'Strawberry Ice Cream',
            price: 75,
            type: 'veg',
            img: 'https://www.foodandwine.com/thmb/cIi531wXxZVnh4uHUf-LfMUderM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roasted-Strawberry-Vanilla-Ice-Cream-FT-RECIPE0622-7f6da8d30ee54b629421e5767e4b8fe0.jpg',
            rating: 4.4
          },
          {
            name: 'Butterscotch Ice Cream',
            price: 85,
            type: 'veg',
            img: 'https://static.toiimg.com/photo/84014919.cms',
            rating: 4.6
          }
        ]
      };
    }
    else if (name == 'Soda') {
      this.selectedItem = {
        name: 'Soda',
        options: [
          {
            name: 'Plain Soda',
            price: 30,
            type: 'veg',
            img: 'https://m.media-amazon.com/images/I/41akRAbexAL.jpg',
            rating: 4.1
          },
          {
            name: 'Lemon Soda',
            price: 40,
            type: 'veg',
            img: 'https://www.seriouseats.com/thmb/Lkr5DnY7jNP2aP5DS3d5qE0PEkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__08__20200816-nimbu-soda-vicky-wasik-1-28079d5d45ee4e47a37a969d1e4834a0.jpg',
            rating: 4.4
          },
          {
            name: 'Masala Soda',
            price: 45,
            type: 'veg',
            img: 'https://ranveerbrar.com/wp-content/uploads/2021/05/masala-soda-scaled.jpg',
            rating: 4.5
          },
          {
            name: 'Orange Soda',
            price: 50,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_RMCwhdx8Uybly0qavscEuNKzpZHNjL4Og&s',
            rating: 4.3
          }
        ]
      };
    }
    else if (name == 'Coffee') {
      this.selectedItem = {
        name: 'Coffee',
        options: [
          {
            name: 'Filter Coffee',
            price: 10,
            type: 'veg',
            img: 'https://www.thecaffeinebaar.com/cdn/shop/articles/Filter_1500x.jpg?v=1636717220',
            rating: 4.6
          },
          {
            name: 'Cold Coffee',
            price: 60,
            type: 'veg',
            img: 'https://www.milkmaid.in/sites/default/files/2024-05/Cold-Coffee-335x300.jpg',
            rating: 4.5
          },
          {
            name: 'Cappuccino',
            price: 80,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rXs2QmxmylgxuEabrQkVAQVL3wD-A3orMg&s',
            rating: 4.7
          },
          {
            name: 'Espresso',
            price: 70,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YcL8lvvT3R-Qeiw9h7K8k6tJ9MmfGPedow&s',
            rating: 4.4
          }
        ]
      };
    }
    else if (name == 'Panipuri') {
      this.selectedItem = {
        name: 'PaniPuri',
        options: [
          {
            name: 'Classic PaniPuri',
            price: 20,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIEkjFHJFxe3pjU9IooFnr9gI3SUZHsn1jA&s',
            rating: 4.5
          },
          {
            name: 'Masala PaniPuri',
            price: 25,
            type: 'veg',
            img: 'https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2019/06/Sukha-Puri-I.jpg?resize=600%2C900&ssl=1',
            rating: 4.6
          },
          {
            name: 'Sweet & Spicy PaniPuri',
            price: 30,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7jt3Pr-eOG4Zhg8OkMQ-YKr3my9SRYIkkg&s',
            rating: 4.4
          },
          {
            name: 'Dahi Puri',
            price: 40,
            type: 'veg',
            img: 'https://www.indianveggiedelight.com/wp-content/uploads/2023/07/dahi-puri-featured-500x500.jpg',
            rating: 4.7
          }
        ]
      };
    }
    else if (name == 'Mutton') {
      this.selectedItem = {
        name: 'Mutton Biryani',
        options: [
          {
            name: 'Classic Mutton Biryani',
            price: 350,
            type: 'nonveg',
            img: 'https://blog.railrestro.com/wp-content/uploads/2016/07/Briyani-ordering-in-Train-1024x683.jpg',
            rating: 4.6
          },
          {
            name: 'Dum Mutton Biryani',
            price: 380,
            type: 'nonveg',
            img: 'https://vismaifood.com/storage/app/uploads/public/912/551/ed8/thumb__1200_0_0_0_auto.jpg',
            rating: 4.8
          },
          {
            name: 'Spicy Mutton Biryani',
            price: 360,
            type: 'nonveg',
            img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg',
            rating: 4.5
          },
          {
            name: 'Mutton Fry Piece Biryani',
            price: 400,
            type: 'nonveg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNXHWgi1LdoYN0RpbFoKr6Mx35EEuIO_FNQ&s',
            rating: 4.7
          }
        ]
      };
    }
    else if (name == 'Lava') {
      this.selectedItem = {
        name: 'Lava Cake',
        options: [
          {
            name: 'Classic Chocolate Lava Cake',
            price: 250,
            type: 'veg',
            img: 'https://www.wearetateandlylesugars.com/wp-content/uploads/sites/2/2023/07/Chocolate-Lava-Cake-500-x-400_1.png',
            rating: 4.7
          },
          {
            name: 'Double Chocolate Lava',
            price: 280,
            type: 'veg',
            img: 'https://bakerbynature.com/wp-content/uploads/2019/01/moltenchocolatelavacakes1-1-of-1.jpg',
            rating: 4.8
          },
          {
            name: 'White Chocolate Lava Cake',
            price: 270,
            type: 'veg',
            img: 'https://images.kitchenstories.io/recipeImages/C163-photo-final.jpg',
            rating: 4.5
          },
          {
            name: 'Lava Cake with Ice Cream',
            price: 300,
            type: 'veg',
            img: 'https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&',
            rating: 4.9
          }
        ]
      };
    }
    else if (name == 'Waffle') {
      this.selectedItem = {
        name: 'Waffle',
        options: [
          {
            name: 'Classic Waffle',
            price: 250,
            type: 'veg',
            img: 'https://www.allrecipes.com/thmb/imrP1HYi5pu7j1en1_TI-Kcnzt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20513-classic-waffles-mfs-025-4x3-81c0f0ace44d480ca69dd5f2c949731a.jpg',
            rating: 4.4
          },
          {
            name: 'Chocolate Waffle',
            price: 280,
            type: 'veg',
            img: 'https://www.thekitchenwhisperer.net/wp-content/uploads/2014/09/Chocolate-Belgian-Waffles.jpg',
            rating: 4.6
          },
          {
            name: 'Strawberry Waffle',
            price: 270,
            type: 'veg',
            img: 'https://99pancakes.in/cdn/shop/files/CreamyStrawberrywaffle.jpg?v=1755018743&width=1920',
            rating: 4.5
          },
          {
            name: 'Waffle with Ice Cream',
            price: 300,
            type: 'veg',
            img: 'https://i.pinimg.com/736x/bf/07/08/bf0708d96882c164edb344cdb8adc131.jpg',
            rating: 4.8
          }
        ]
      };
    }
    else if (name == 'Tiramisu') {
      this.selectedItem = {
        name: 'Tiramisu',
        options: [
          {
            name: 'Classic Tiramisu',
            price: 500,
            type: 'veg',
            img: 'https://www.carluccios.com/cdn/shop/articles/Tiramisu_1d9de3f3-1f3d-40c4-bcab-b1c669a7616d.jpg?v=1752744640',
            rating: 4.7
          },
          {
            name: 'Chocolate Tiramisu',
            price: 520,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKLImZuPx2FMG2E8M1kSIUTLqnpE8Wn0EBg&s',
            rating: 4.8
          },
          {
            name: 'Strawberry Tiramisu',
            price: 510,
            type: 'veg',
            img: 'https://myincrediblerecipes.com/wp-content/uploads/2024/05/Facebook-Post-36.jpg',
            rating: 4.6
          },
          {
            name: 'Premium Italian Tiramisu',
            price: 550,
            type: 'veg',
            img: 'https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/e8bc15b5083d45f4a7b6829877abd24f~tplv-fhlh96nyum-crop-webp:896:1194.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=e1be8f53&idc=useast5&from=2378011839',
            rating: 4.9
          }
        ]
      };
    }
    else if (name == 'Choco') {
      this.selectedItem = {
        name: 'Choco Dessert',
        options: [
          {
            name: 'Choco Brownie',
            price: 320,
            type: 'veg',
            img: 'https://icecreambakery.in/wp-content/uploads/2024/12/Brownie-Recipe-with-Cocoa-Powder-1200x900.jpg',
            rating: 4.6
          },
          {
            name: 'Choco Lava Delight',
            price: 350,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YHZlS52G1mJfgKk2w1i-SAL7NqoJdXtgow&s',
            rating: 4.7
          },
          {
            name: 'Choco Truffle Cake',
            price: 370,
            type: 'veg',
            img: 'https://static.toiimg.com/thumb/75758092.cms?imgsize=1439590&width=800&height=800',
            rating: 4.8
          },
          {
            name: 'Choco Sundae',
            price: 340,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AatGN2XVUsJBQ9at_bNRiPwiXYYxENQ5uw&s',
            rating: 4.5
          }
        ]
      };
    }
    else if (name == 'Pudding') {
      this.selectedItem = {
        name: 'Milk Pudding',
        options: [
          {
            name: 'Classic Milk Pudding',
            price: 50,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpsN2o1pWpPlMLxeEdRG3fGMTDtZrQgfPkA&s',
            rating: 4.4
          },
          {
            name: 'Caramel Milk Pudding',
            price: 80,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tCWQaTHbnYKXAuvUoQ9vgSaMDt-qoNLiDA&s',
            rating: 4.6
          },
          {
            name: 'Chocolate Milk Pudding',
            price: 90,
            type: 'veg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYD_Gk_1n7PVKZKqrXQvDF77iMRSgS1onBPA&s',
            rating: 4.5
          },
          {
            name: 'Fruit Milk Pudding',
            price: 100,
            type: 'veg',
            img: 'https://i.ytimg.com/vi/tuQWEOkCwko/maxresdefault.jpg',
            rating: 4.3
          }
        ]
      };
    }
    else if (name == 'Macrons') {
      this.selectedItem = {
        name: 'Macrons',
        options: [
          { name: 'Vanilla Macron', price: 550, type: 'veg', img: 'https://www.baking-sense.com/wp-content/uploads/2023/04/Vanilla-Macaron-featured.jpg', rating: 4.5 },
          { name: 'Chocolate Macron', price: 580, type: 'veg', img: 'https://thescranline.com/wp-content/uploads/2024/09/CHOOCLATE-MACARONS-S-02.jpg', rating: 4.7 }
        ]
      };
    }
    else if (name == 'Mojithos') {
      this.selectedItem = {
        name: 'Mojitho',
        options: [
          { name: 'Mint Mojitho', price: 150, type: 'veg', img: 'https://www.veganfoodandliving.com/wp-content/uploads/2020/07/Mojioto.jpg', rating: 4.4 },
          { name: 'Blue Mojitho', price: 170, type: 'veg', img: 'https://cookingwithjanica.com/wp-content/uploads/2023/06/blue_mojito.jpg', rating: 4.6 }
        ]
      };
    }
    else if (name == 'Maggie') {
      this.selectedItem = {
        name: 'Maggie',
        options: [
          { name: 'Plain Maggie', price: 50, type: 'veg', img: 'https://images.jdmagicbox.com/quickquotes/images_main/fresh-plain-maggi-noodles-w66aowsa.jpg', rating: 4.2 },
          { name: 'Egg Maggie', price: 70, type: 'nonveg', img: 'https://www.licious.in/blog/wp-content/uploads/2022/01/shutterstock_1969538683-750x750.jpg', rating: 4.5 },
          { name: 'Chicken Maggie', price: 90, type: 'nonveg', img: 'https://www.maggi.lk/sites/default/files/styles/home_stage_944_531/public/srh_recipes/7c979378d75d81812f8540563da0e74c.jpg?h=4f5b30f1&itok=764JZNuT', rating: 4.5 },
          { name: 'Chicken  cheese Maggie', price: 110, type: 'nonveg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6ZopblCBYlAbS42wUNsYAZsGjv-zT2OQjQ&s', rating: 4.5 },
          { name: 'Cheese Maggie', price: 70, type: 'veg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oYpB8yYJOkV_LTCsesZ-87LmqYedZnutvg&s', rating: 4.5 }
        ]
      };
    }
    else if (name == 'Lays') {
      this.selectedItem = {
        name: 'Lays',
        options: [
          { name: 'Classic Salt', price: 20, type: 'veg', img: 'https://images-cdn.ubuy.co.in/681327a7f84579c21c0552a7-lays-potato-chips-classic-8-oz.jpg', rating: 4.3 },
          { name: 'Masala Lays', price: 25, type: 'veg', img: 'https://www.bbassets.com/media/uploads/p/l/294281_13-lays-potato-chips-indias-magic-masala.jpg', rating: 4.4 }
        ]
      };
    }
    else if (name == 'WaterBottle') {
      this.selectedItem = {
        name: 'Water Bottle',
        options: [
          { name: 'Normal Water', price: 20, type: 'veg', img: 'https://5.imimg.com/data5/ANDROID/Default/2024/7/432726369/AR/LS/JC/45269987/product-jpeg.jpg', rating: 4.2 },
          { name: 'Cold Water', price: 25, type: 'veg', img: 'https://www.verywellhealth.com/thmb/y-OAKkiQkRKDsit4evoGyCG8gu0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/water-bottles-ice-doram-Eplus-GettyImages-172391327-56a9dbe55f9b58b7d0ff907f.jpg', rating: 4.3 }
        ]
      };
    }
    else if (name == 'Paneer Tikka') {
      this.selectedItem = {
        name: 'Paneer Tikka',
        options: [
          { name: 'Classic Paneer Tikka', price: 220, type: 'veg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZEmg_dxr491Xosu7uZ04C6o-nLwwFf_2PDQ&s', rating: 4.6 },
          { name: 'Spicy Paneer Tikka', price: 240, type: 'veg', img: 'https://lentillovingfamily.com/wp-content/uploads/2025/08/paneer-tikka-2.jpg', rating: 4.7 }
        ]
      };
    }
    else if (name == 'Butter Chicken') {
      this.selectedItem = {
        name: 'Butter Chicken',
        options: [
          { name: 'Classic Butter Chicken', price: 320, type: 'nonveg', img: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400', rating: 4.8 },
          { name: 'Spicy Butter Chicken', price: 340, type: 'nonveg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jmOzvSsdYHfGgoqpytYA-sq7WcbW1HzBXA&s', rating: 4.7 }
        ]
      };
    }
    else if (name == 'Veg Pulao') {
      this.selectedItem = {
        name: 'Veg Pulao',
        options: [
          { name: 'Plain Veg Pulao', price: 180, type: 'veg', img: 'https://i.ytimg.com/vi/AYkSNH5Sj4M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBg-8ePE68YsFXI7LmAWrCInHTBcA', rating: 4.3 },
          { name: 'Paneer Pulao', price: 200, type: 'veg', img: 'https://www.whiskaffair.com/wp-content/uploads/2019/08/Paneer-Pulao-1-3.jpg', rating: 4.5 }
        ]
      };
    }
    else if (name == 'Spring Rolls') {
      this.selectedItem = {
        name: 'Spring Rolls',
        options: [
          { name: 'Veg Spring Roll', price: 140, type: 'veg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuii3vz-c9a8uofaphIF_OV3CkMqEl7b39iA&s', rating: 4.4 },
          { name: 'Chicken Spring Roll', price: 180, type: 'nonveg', img: 'https://img-cdn.publive.online/fit-in/1200x675/sanjeev-kapoor/media/media_files/dwWZUDmNXyRf8Or1ejm0.JPG', rating: 4.6 }
        ]
      };
    }
    else if (name == 'Pakoda') {
      this.selectedItem = {
        name: 'Pakoda',
        options: [
          { name: 'Onion Pakoda', price: 60, type: 'veg', img: 'https://www.whiskaffair.com/wp-content/uploads/2020/07/Onion-Pakoda-2-3.jpg', rating: 4.5 },
          { name: 'Bread Pakoda', price: 80, type: 'veg', img: 'https://glenindia.com/cdn/shop/articles/image4-17_e41b7936-e487-4f19-944d-c26170a4e7aa_1280x720.jpg?v=1753529412', rating: 4.6 }
        ]
      };
    }
    else if (name == 'Sandwich') {
      this.selectedItem = {
        name: 'Sandwich',
        options: [
          { name: 'Veg Sandwich', price: 90, type: 'veg', img: 'https://shwetainthekitchen.com/wp-content/uploads/2020/08/IMG_9973.jpg', rating: 4.3 },
          { name: 'Grilled Sandwich', price: 120, type: 'veg', img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe.jpg', rating: 4.5 },
          { name: 'Chicken Sandwich', price: 130, type: 'nonveg', img: 'https://i.ytimg.com/vi/yQyx7Hkww98/sddefault.jpg', rating: 4.5 }
        ]
      };
    }
    else if (name == 'Gulab Jamun') {
      this.selectedItem = {
        name: 'Gulab Jamun',
        options: [
          { name: 'Hot Gulab Jamun', price: 70, type: 'veg', img: 'https://i.pinimg.com/736x/23.jpg', rating: 4.7 }
        ]
      };
    }
    else if (name == 'Brownie') {
      this.selectedItem = {
        name: 'Brownie',
        options: [
          { name: 'Chocolate Brownie', price: 120, type: 'veg', img: 'https://i.pinimg.com/736x/24.jpg', rating: 4.6 }
        ]
      };
    }
    else if (name == 'Cupcake') {
      this.selectedItem = {
        name: 'Cupcake',
        options: [
          { name: 'Vanilla Cupcake', price: 90, type: 'veg', img: 'https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg', rating: 4.4 },
          { name: 'Strawberry Cupcake', price: 90, type: 'veg', img: 'hhttps://preppykitchen.com/wp-content/uploads/2022/07/Strawberry-Cupcakes-Feature.jpg', rating: 4.4 },
          { name: 'Vanilla Cupcake', price: 90, type: 'veg', img: 'data:image/jpeg;base64,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', rating: 4.4 },
          { name: 'Mango Cupcake', price: 90, type: 'veg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4PCMx6lFgFBVmV3YJMeSi5tbUhlWm1C3fw&s', rating: 4.4 },
        ]
      };
    }
    else if (name == 'Mango Juice') {
      this.selectedItem = {
        name: 'Mango Juice',
        options: [
          { name: 'Fresh Mango Juice', price: 60, type: 'veg', img: 'https://www.crazyvegankitchen.com/wp-content/uploads/2023/06/mango-juice-recipe.jpg', rating: 4.5 }
        ]
      };
    }
    else if (name == 'Lassi') {
      this.selectedItem = {
        name: 'Lassi',
        options: [
          { name: 'Sweet Lassi', price: 25, type: 'veg', img: 'data:image/jpeg;base64,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', rating: 4.6 },
          { name: 'Mango Lassi', price: 50, type: 'veg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcozYB-g62sZPRR0mmGipKHr884d82-vkkw&s', rating: 4.6 },
        ]
      };
    }
    else if (name == 'Chicken Curry') {
      this.selectedItem = {
        name: 'Chicken Curry',
        options: [
          { name: 'Spicy Chicken Curry', price: 260, type: 'nonveg', img: 'https://www.whiskaffair.com/wp-content/uploads/2021/10/Andhra-Chicken-Curry-2-3.jpg', rating: 4.7 }
        ]
      };
    }
    else if (name == 'Fish Fry') {
      this.selectedItem = {
        name: 'Fish Fry',
        options: [
          { name: 'Crispy Fish Fry', price: 240, type: 'nonveg', img: 'https://i.ytimg.com/vi/jLrHENui4vU/maxresdefault.jpg', rating: 4.6 }
        ]
      };
    }
    else if (name == 'Popcorn') {
      this.selectedItem = {
        name: 'Popcorn',
        options: [
          { name: 'Salted Popcorn', price: 20, type: 'veg', img: 'data:image/jpeg;base64,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', rating: 4.3 },
          { name: 'Caramel Popcorn', price: 40, type: 'veg', img: 'https://grandbaby-cakes.com/wp-content/uploads/2021/08/Caramel-Popcorn-1.jpeg', rating: 4.3 },
          { name: 'Chocolate Popcorn', price: 45, type: 'veg', img: 'https://www.seriouseats.com/thmb/k4VHU0HoeMOzHNiCXBzr4jVtFzg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__06__20170523-chocolate-popcorn-vicky-wasik-13-635a4832ab4c438eb5bd541e930a0461.jpg', rating: 4.3 }
        ]
      };
    }
    else if (name == 'Noodles') {
      this.selectedItem = {
        name: 'Noodles',
        options: [
          { name: 'Veg Noodles', price: 150, type: 'veg', img: 'https://vismaifood.com/storage/app/uploads/public/92f/d60/bf6/thumb__1200_0_0_0_auto.jpg', rating: 4.4 },
          { name: 'Chicken Noodles', price: 180, type: 'nonveg', img: 'https://i.ytimg.com/vi/MhzBUy-JOCE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBHrjt0krn7AlWVFHVR222EZTfRQg', rating: 4.6 }
        ]
      };
    }
    else if (name == 'Chapathi') {
      this.selectedItem = {
        name: 'Chapathi',
        options: [
          { name: 'Chapathi Set', price: 40, type: 'veg', img: 'https://i.pinimg.com/736x/33.jpg', rating: 4.2 }
        ]
      };
    }
    else if (name == 'Ice Cream Sundae') {
      this.selectedItem = {
        name: 'Ice Cream Sundae',
        options: [
          { name: 'Chocolate Sundae', price: 130, type: 'veg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZuKpnsDnxmjYHLk4DqiWGhQumcgLph8mpA&s', rating: 4.7 },
          { name: 'Strawberry Sundae', price: 130, type: 'veg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyH8wuVHfslrUbgg4ZBtxYkJ27Vb-0JA1Zyw&s', rating: 4.6 }
        ]
      };
    }
    else if (name == 'Pavbaji') {
      this.selectedItem = {
        name: 'Pavbaji',
        options: [
          {
            name: 'Classic Pav Bhaji',
            price: 50,
            type: 'veg',
            img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji.jpg',
            rating: 4.4
          },
          {
            name: 'Butter Pav Bhaji',
            price: 70,
            type: 'veg',
            img: 'https://i.ytimg.com/vi/CitJDGnpDDM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDH0EEssZ4Pa4t7YnZmyqdIJuf08w',
            rating: 4.6
          },
          {
            name: 'Cheese Pav Bhaji',
            price: 90,
            type: 'veg',
            img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/cheese_pav_bhaji.webp',
            rating: 4.7
          }
        ]
      };
    }
    this.showPopup = true;
  }
  proceedToCart() {

    this.router.navigate(['/cart']);

  }
  addit(name: string, price: number) {
    this.cs.addition(name, price);
  }
  sub(name: string, price: number) {
    //this.cs.remove();
    //this.count--;
    this.cs.subtraction(name, price)
  }
  back() {
    this.router.navigate(['./home'])
  }
  getRandomRating() {
    return (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  }
deleteItem(id: number, event: Event) {

  event.stopPropagation();

  let menu = JSON.parse(localStorage.getItem('extraMenu') || '[]');

  menu = menu.filter((item: any) => item.id !== id);

  localStorage.setItem('extraMenu', JSON.stringify(menu));

  // update UI
  this.menuItems = menu;
}
deleteStaticOption(itemName: string, optName: string, event: Event) {
  event.stopPropagation();

  if (!this.deletedOptions[itemName]) {
    this.deletedOptions[itemName] = [];
  }

  this.deletedOptions[itemName].push(optName);

  localStorage.setItem("deletedOptions", JSON.stringify(this.deletedOptions));
}
deleteStatic(name: string, event: Event) {
  event.stopPropagation();

  this.lastDeletedItem = name; // store last deleted

  this.hiddenItems.push(name);

  localStorage.setItem("hiddenItems", JSON.stringify(this.hiddenItems));
}
deleteOption(opt: any) {

  let menu = JSON.parse(localStorage.getItem('extraMenu') || '[]');

  const index = menu.findIndex((i: any) => i.id === this.selectedItem.id);

  if (index > -1) {

    menu[index].options =
      menu[index].options.filter((o: any) => o.name !== opt.name);

    localStorage.setItem('extraMenu', JSON.stringify(menu));

    // update UI instantly
    this.selectedItem.options =
      this.selectedItem.options.filter((o: any) => o.name !== opt.name);
  }
}
undoDelete() {

  if (!this.lastDeletedItem) return;

  this.hiddenItems = this.hiddenItems.filter(
    (item: string) => item !== this.lastDeletedItem
  );

  localStorage.setItem("hiddenItems", JSON.stringify(this.hiddenItems));

  this.lastDeletedItem = ""; // reset
}
}