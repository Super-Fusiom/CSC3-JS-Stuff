class Phone:
    def __init__(self, brand, storage, release_year, price):
        self.brand = brand;
        self.storage = storage;
        self.release_year = release_year
        self.price = price
        self.depreciation_rate = 0.67

    def depreciation_m(self):
        value = self.price
        for i in range(2):
            value = value * (1 - self.depreciation_rate)
        return value
            
    
fusiom_phone = Phone("Super_Fusiom", 128, 2023, 500)

if __name__ == "__main__":
    e = fusiom_phone.depreciation_m()
    print("Your phone has depreciated by {}".format(e))
        