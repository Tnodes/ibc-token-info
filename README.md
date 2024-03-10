# IBC Token Info
a simple packages to get ibc token info from imperator API

# Install Packages
```
npm i @tnodes/ibc-token-info
```

# Example-Usage
```
import { fetchTokenData, TokenData } from 'ibc-token-info';

async function main() {
  const symbol = 'SEI'; \\ Change token symbol
  try {
    const tokenData: TokenData[] = await fetchTokenData(symbol);
    console.log(`${symbol} Token Data:`, tokenData);
  } catch (error: any) {
    console.error(error.message);
  }
}

main();
```

# Response
```
SEI Token Data: [
  {
    price: 0.8497151835,
    denom: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
    symbol: 'SEI',
    liquidity: 141592.80253725,
    liquidity_24h_change: 4.8700706261,
    volume_24h: 205458.5158111372,
    volume_24h_change: -38.4073717952,
    name: 'Sei',
    price_24h_change: -1.0644440045,
    exponent: 6,
    display: 'sei'
  }
]
```