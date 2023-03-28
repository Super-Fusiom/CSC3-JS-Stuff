class Depreciation:
    def __init__(self, price, depreciation_rate, years):
        self.price = price
        self.depreciation_rate = depreciation_rate
        self.years = years

    def calculate_depreciation(self):
        remaining_value = self.price
        for i in range(self.years):
            remaining_value = remaining_value * (1 - self.depreciation_rate)
        return remaining_value

# Usage Example
phone1 = Depreciation(price=500, depreciation_rate=0.67, years=2)
depreciated_value = phone1.calculate_depreciation()
print(f"The depreciated value of phone1 after {phone1.years} years is ${depreciated_value:.2f}.")
