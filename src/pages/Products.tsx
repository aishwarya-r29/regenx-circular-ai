import { ProductCard } from "@/components/products/ProductCard";

const Products = () => {
  const products = [
    {
      name: "iPhone 13 Pro",
      image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&h=300&fit=crop",
      condition: "Excellent",
      resaleValue: "₹52,000",
      carbonSaved: "45 kg CO₂",
      conditionScore: 92
    },
    {
      name: "MacBook Air M1",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      condition: "Very Good",
      resaleValue: "₹68,500",
      carbonSaved: "78 kg CO₂",
      conditionScore: 85
    },
    {
      name: "Samsung Galaxy Buds",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
      condition: "Good",
      resaleValue: "₹4,200",
      carbonSaved: "8 kg CO₂",
      conditionScore: 75
    },
    {
      name: "iPad Pro 11",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop",
      condition: "Excellent",
      resaleValue: "₹48,900",
      carbonSaved: "52 kg CO₂",
      conditionScore: 90
    },
    {
      name: "Sony WH-1000XM4",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
      condition: "Very Good",
      resaleValue: "₹18,500",
      carbonSaved: "15 kg CO₂",
      conditionScore: 82
    },
    {
      name: "Dell XPS 15",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
      condition: "Good",
      resaleValue: "₹62,000",
      carbonSaved: "68 kg CO₂",
      conditionScore: 78
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">
            Your Product <span className="gradient-text">Vault</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Track, manage, and regenerate value from your electronics
          </p>
        </div>

        {/* Stats Bar */}
        <div className="glass-card rounded-2xl p-6 mb-12 animate-fade-in">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">Total Items</p>
              <p className="text-3xl font-bold gradient-text">12</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">Total Value</p>
              <p className="text-3xl font-bold">₹89,450</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">CO₂ Saved</p>
              <p className="text-3xl font-bold text-accent">142 kg</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">Avg Condition</p>
              <p className="text-3xl font-bold">84%</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
