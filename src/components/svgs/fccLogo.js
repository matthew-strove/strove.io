import React, { memo } from 'react'

const FccLogo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="315"
    height="36"
    preserveAspectRatio="xMidYMid meet"
    version="1.1"
    viewBox="0 0 2100 240"
    {...props}
  >
    <path
      id="aTZImEIR"
      d="M354.16 55.58L358.53 56.09L362.68 56.87L366.61 57.83L370.33 58.99L373.85 60.4L377.11 61.98L380.19 63.81L383.02 65.86L385.69 68.07L388.12 70.52L390.33 73.15L392.32 76.03L394.1 79.13L395.68 82.38L397.04 85.91L398.18 89.56L399.14 93.51L399.88 97.59L400.39 101.96L400.7 106.47L400.81 111.24L400.81 112.4L400.77 113.49L400.66 114.54L400.35 116.55L400.14 117.44L399.88 118.33L399.61 119.11L398.87 120.58L398.52 121.21L398.03 121.83L397.56 122.41L397.04 122.88L396.46 123.37L395.89 123.73L395.26 124.11L394.57 124.35L393.83 124.62L393.1 124.84L392.32 124.93L391.47 125.04L302.54 125.04L302.54 124.31L302.34 124.31L302.34 142.68L302.38 145.14L302.65 147.54L303.01 149.82L303.59 151.96L304.28 154.01L305.17 155.95L306.15 157.74L307.38 159.45L308.67 161.04L310.21 162.55L311.88 163.91L313.67 165.18L315.65 166.34L317.81 167.39L320.07 168.33L322.54 169.18L325.15 169.84L327.94 170.49L330.88 170.96L333.96 171.32L337.21 171.63L340.63 171.78L344.19 171.85L345.51 171.85L346.83 171.78L348.07 171.78L349.35 171.74L350.55 171.7L351.75 171.58L352.96 171.54L355.28 171.32L356.37 171.23L357.49 171.05L359.58 170.74L360.56 170.58L361.61 170.38L364.46 169.76L365.4 169.49L366.29 169.26L367.14 169.02L367.97 168.71L368.81 168.44L369.28 168.28L369.75 168.06L370.29 167.9L370.8 167.66L371.38 167.44L371.96 167.17L372.58 166.86L373.21 166.59L375.26 165.5L376.06 165.07L376.77 164.65L378.47 163.71L379.29 163.2L380.19 162.66L381.08 162.08L382.97 160.84L383.98 160.19L385.03 159.52L386.07 158.78L387.32 157.62L388.59 156.58L389.17 156.11L389.69 155.68L390.27 155.26L390.8 154.84L391.74 154.1L392.67 153.48L393.1 153.21L393.52 153.01L393.9 152.74L394.61 152.43L394.95 152.27L395.26 152.16L395.51 152.07L396.04 151.96L396.89 151.96L397.94 152.07L398.45 152.16L398.92 152.27L399.41 152.43L399.81 152.58L400.55 153.01L400.92 153.28L401.55 153.9L401.82 154.21L402.08 154.59L402.49 155.42L402.64 155.88L402.75 156.42L402.91 156.96L402.98 157.47L403.07 158.05L403.07 158.67L403.13 159.36L403.07 159.99L403.02 160.68L402.91 161.35L402.82 161.97L402.17 164.02L401.86 164.65L401.55 165.34L401.19 166.03L400.77 166.7L400.3 167.39L399.81 168.02L398.76 169.38L397.51 170.74L396.15 172.12L394.57 173.48L393.72 174.15L392.9 174.88L391.43 175.93L389.91 176.98L388.33 177.98L386.7 178.99L385.03 179.88L383.24 180.77L381.41 181.55L379.52 182.33L377.58 183.07L375.53 183.76L373.43 184.38L371.27 184.96L369.08 185.54L366.81 186.01L362.1 186.86L359.63 187.17L357.11 187.48L354.54 187.68L351.87 187.91L349.19 188.02L346.45 188.11L343.61 188.11L338.75 188.06L334.07 187.8L329.61 187.37L325.37 186.75L321.32 186.01L317.5 185.08L313.93 183.96L310.52 182.67L307.38 181.24L304.43 179.61L301.69 177.83L299.13 175.84L296.87 173.72L294.78 171.43L292.88 168.91L291.26 166.28L289.85 163.44L288.58 160.46L287.64 157.27L286.86 153.94L286.28 150.44L285.97 146.72L285.86 142.84L285.86 95.72L285.97 94.34L286.06 93.09L286.22 91.77L286.44 90.46L286.64 89.21L286.95 87.94L287.26 86.73L287.69 85.48L288.11 84.28L288.58 83.08L289.11 81.92L290.25 79.6L290.94 78.46L291.63 77.34L292.37 76.25L293.15 75.2L294 74.16L294.89 73.11L296.76 71.1L297.77 70.1L299.13 68.8L302.07 66.37L303.63 65.28L305.26 64.23L306.95 63.23L308.74 62.29L310.52 61.4L312.4 60.62L314.34 59.82L316.34 59.15L318.39 58.5L320.53 57.88L322.7 57.36L324.95 56.87L327.2 56.47L329.57 56.16L331.97 55.83L334.38 55.58L336.9 55.42L339.49 55.27L342.1 55.2L344.77 55.16L349.55 55.27L354.16 55.58ZM333.76 71.64L329.72 72.3L325.78 73.31L321.96 74.56L318.33 76.1L314.83 77.88L311.61 80.4L308.89 83.01L306.58 85.84L304.75 88.78L303.43 91.88L302.58 95.14L302.34 98.55L302.34 108.21L384.18 108.21L383.29 98.4L380.77 90.06L376.53 83.23L370.53 77.92L362.88 74.09L353.43 71.84L342.32 71.06L337.95 71.21L333.76 71.64Z"
    />
    <path
      id="a1reJuC17o"
      d="M2035.67 1.73C2034.5 2.88 2033.34 4.55 2033.34 6.23C2033.33 9.13 2036.73 13.06 2043.03 19.52C2069.26 44.78 2082.46 75.72 2082.37 113.02C2082.27 154.3 2068.39 187.45 2041.41 213.14C2035.74 218.22 2033.41 222.2 2033.4 225.61C2033.4 227.29 2034.55 229.03 2035.71 230.7C2036.8 231.87 2039.12 233.03 2040.79 233.03C2047.03 233.05 2055.77 225.67 2067.17 211.31C2089.38 184.09 2099.42 154.03 2099.98 113.07C2100.5 72.08 2087.66 44.29 2062.5 15.59C2053.45 5.34 2045.91 0.01 2040.75 0C2039.08 0 2037.34 0.57 2035.67 1.73Z"
    />
    <path
      id="b3CiUzYJD1"
      d="M142.09 65.75C142.09 60.08 145.51 57.83 152.33 57.83C155.63 57.83 182.12 57.83 185.49 57.83C191.15 57.83 193.98 62.92 193.98 72.22C204.22 61.4 215.17 54.93 226.56 54.93C236.22 54.93 243.78 57.83 248.91 63.5C254.59 69.16 256.89 77.3 256.89 86.42C256.89 92.66 254.01 96.08 248.91 96.08C245.5 96.08 243.24 93.78 242.11 89.83C239.83 81.85 238.7 77.88 238.12 77.3C235.86 73.35 231.29 71.06 225.63 71.06C219.38 71.06 213.14 73.35 207.83 77.88C204.42 80.18 199.85 85.26 193.98 92.82C193.98 97.97 193.98 123.53 193.98 169.53C212.49 169.53 222.8 169.53 224.82 169.53C231.65 169.53 235.06 172.43 235.06 177.52C235.06 183.18 231.65 186.06 224.82 186.06C217.53 186.06 158.88 186.06 151.53 186.06C144.72 186.06 141.31 183.18 141.31 178.1C141.31 172.43 144.72 170.11 151.53 170.11C153.22 170.11 161.61 170.11 176.72 170.11C176.72 170.07 176.72 169.82 176.72 169.38C176.74 169.38 176.8 169.38 176.93 169.38C176.93 111.99 176.93 80.11 176.93 73.73C161.61 73.73 153.4 73.73 152.33 73.73C145.51 73.73 142.09 70.9 142.09 65.75Z"
    />
    <path
      id="a27fjRDZiD"
      d="M1956.6 120.44C1946.75 117.92 1987.2 70.13 1915.3 12.91C1915.3 12.91 1924.74 42.88 1877.17 109.76C1829.58 176.62 1898.33 216.44 1898.33 216.44C1898.33 216.44 1866.07 199.25 1903.57 138.04C1910.29 126.93 1919.07 116.87 1929.98 94.24C1929.98 94.24 1939.63 107.86 1934.59 137.41C1927.05 182.06 1967.28 169.28 1967.91 169.9C1981.96 186.45 1956.27 215.53 1954.71 216.44C1953.15 217.33 2028.07 171.37 1974.84 102.2C1971.19 105.85 1966.46 122.96 1956.6 120.44Z"
    />
    <path
      id="fO2LoynhC"
      d="M9.66 57.99C10.93 57.99 16.99 57.99 28.08 57.99C28.08 48.33 28.08 42.98 28.08 41.89C28.08 13.86 42.46 0.01 70.47 0.01C81.86 0.01 91.72 2.31 99.05 6.3C108.71 11.96 114.06 21.26 114.06 32.08C114.06 39.41 111.19 42.29 106.1 42.29C102.69 42.29 99.28 39.99 97.54 36C95.29 28.66 93.03 24.67 91.87 22.78C88.46 18.79 81.64 16.53 71.78 16.53C54.57 16.53 46.07 25.03 46.07 42.29C46.07 43.29 46.07 48.49 46.07 57.83C65.96 57.83 76.98 57.83 79.19 57.83C86.57 57.83 89.98 60.66 89.98 65.75C89.98 71.41 86.57 73.73 79.19 73.73C76.98 73.73 65.96 73.73 46.07 73.73C46.07 136.6 46.07 171.47 46.07 178.45C46.07 184.7 43.19 188.11 38.09 188.11C32.42 188.11 30.13 184.7 30.13 178.45C30.13 171.47 30.13 136.78 30.13 73.91C30.1 73.91 10.67 73.89 9.66 73.89C3.41 73.89 0 71.06 0 65.97C0 60.24 3.41 57.99 9.66 57.99Z"
    />
    <path
      id="ovQ1ILSSG"
      d="M1818.81 1.76C1819.97 2.91 1821.13 4.58 1821.13 6.26C1821.14 9.16 1817.74 13.09 1811.44 19.55C1785.21 44.81 1772.02 75.75 1772.1 113.05C1772.2 154.33 1786.08 187.48 1813.06 213.17C1818.73 218.25 1821.06 222.23 1821.07 225.64C1821.07 227.32 1819.92 229.06 1818.76 230.73C1817.67 231.9 1815.36 233.06 1813.68 233.06C1807.44 233.08 1798.7 225.7 1787.3 211.34C1765.09 184.12 1755.05 154.06 1754.49 113.1C1753.97 72.11 1766.81 44.32 1791.97 15.62C1801.02 5.37 1808.57 0.04 1813.72 0.03C1815.39 0.03 1817.13 0.6 1818.81 1.76Z"
    />
    <path
      id="bidTnXnUH"
      d="M497.93 55.58L502.3 56.09L506.45 56.87L510.37 57.83L514.1 58.99L517.62 60.4L520.87 61.98L523.95 63.81L526.78 65.86L529.46 68.07L531.89 70.52L534.1 73.15L536.08 76.03L537.87 79.13L539.45 82.38L540.81 85.91L541.95 89.56L542.91 93.51L543.64 97.59L544.16 101.96L544.47 106.47L544.58 111.24L544.58 112.4L544.53 113.49L544.42 114.54L544.11 116.55L543.91 117.44L543.64 118.33L543.37 119.11L542.64 120.58L542.28 121.21L541.79 121.83L541.32 122.41L540.81 122.88L540.23 123.37L539.65 123.73L539.03 124.11L538.34 124.35L537.6 124.62L536.86 124.84L536.08 124.93L535.24 125.04L446.3 125.04L446.3 124.31L446.1 124.31L446.1 142.68L446.19 145.14L446.42 147.54L446.84 149.82L447.35 151.96L448.04 154.01L448.94 155.95L449.92 157.74L451.14 159.45L452.5 161.04L453.98 162.55L455.65 163.91L457.43 165.18L459.42 166.34L461.58 167.39L463.83 168.33L466.31 169.18L468.92 169.84L471.7 170.49L474.65 170.96L477.72 171.32L480.98 171.63L484.39 171.78L487.96 171.85L489.28 171.85L490.59 171.78L491.84 171.78L493.11 171.74L494.32 171.7L495.52 171.58L496.72 171.54L499.04 171.32L500.14 171.23L501.25 171.05L504.4 170.58L505.38 170.38L506.34 170.16L507.34 169.96L508.23 169.76L509.17 169.49L510.06 169.26L510.91 169.02L511.73 168.71L512.58 168.44L513.05 168.28L513.52 168.06L514.05 167.9L514.56 167.66L515.14 167.44L515.72 167.17L516.35 166.86L516.97 166.59L518.35 165.88L519.09 165.5L519.83 165.07L520.61 164.65L521.39 164.18L522.23 163.71L523.06 163.2L523.95 162.66L524.84 162.08L526.74 160.84L527.74 160.19L528.79 159.52L529.84 158.78L531.09 157.62L532.36 156.58L532.94 156.11L533.45 155.68L534.03 155.26L534.57 154.84L535.5 154.1L536.44 153.48L536.86 153.21L537.29 153.01L537.67 152.74L538.38 152.43L538.71 152.27L539.03 152.16L539.27 152.07L539.81 151.96L540.65 151.96L541.7 152.07L542.22 152.16L542.68 152.27L543.17 152.43L543.58 152.58L544.31 153.01L544.69 153.28L545.31 153.9L545.58 154.21L545.85 154.59L546.25 155.42L546.41 155.88L546.52 156.42L546.68 156.96L546.74 157.47L546.83 158.05L546.83 158.67L546.9 159.36L546.83 159.99L546.79 160.68L546.68 161.35L546.59 161.97L545.94 164.02L545.63 164.65L545.31 165.34L544.96 166.03L544.11 167.39L543.58 168.02L542.53 169.38L541.28 170.74L539.92 172.12L538.34 173.48L537.49 174.15L536.66 174.88L535.19 175.93L533.67 176.98L532.09 177.98L530.46 178.99L528.79 179.88L527.01 180.77L525.18 181.55L523.28 182.33L521.34 183.07L519.29 183.76L517.2 184.38L515.03 184.96L512.85 185.54L510.57 186.01L505.87 186.86L503.39 187.17L500.87 187.48L498.31 187.68L495.68 187.91L490.21 188.11L487.38 188.11L482.52 188.06L477.84 187.8L473.38 187.37L469.14 186.75L465.08 186.01L461.31 185.08L457.7 183.96L454.29 182.67L451.14 181.24L448.2 179.61L445.46 177.83L442.94 175.84L440.64 173.72L438.54 171.43L436.65 168.91L435.02 166.28L433.62 163.44L432.41 160.46L431.41 157.27L430.63 153.94L430.05 150.44L429.74 146.72L429.62 142.84L429.62 95.72L429.74 94.34L429.83 93.09L429.98 91.77L430.2 90.46L430.4 89.21L430.72 87.94L431.03 86.73L431.45 85.48L431.88 84.28L432.35 83.08L432.88 81.92L434.02 79.6L434.71 78.46L435.4 77.34L436.14 76.25L436.92 75.2L437.76 74.16L438.66 73.11L440.53 71.1L441.53 70.1L442.89 68.8L445.84 66.37L447.4 65.28L449.03 64.23L450.72 63.23L452.5 62.29L454.29 61.4L456.16 60.62L458.1 59.82L460.11 59.15L462.16 58.5L464.3 57.88L466.46 57.36L468.72 56.87L470.97 56.47L473.33 56.16L475.74 55.83L478.15 55.58L480.67 55.42L483.26 55.27L485.86 55.2L488.54 55.16L493.31 55.27L497.93 55.58ZM477.52 71.64L473.49 72.3L469.54 73.31L465.73 74.56L462.09 76.1L458.59 77.88L455.22 80.4L452.39 83.01L450.07 85.84L448.36 88.78L447.09 91.88L446.35 95.14L446.1 98.55L446.1 108.21L527.94 108.21L527.05 98.4L524.53 90.06L520.29 83.23L514.3 77.92L506.65 74.09L497.19 71.84L486.09 71.06L481.72 71.21L477.52 71.64Z"
    />
    <path
      id="cNUomkEDc"
      d="M1587.89 54.31L1588.2 54.38L1588.83 54.58L1589.14 54.73L1589.41 54.89L1589.72 55.04L1590.03 55.27L1590.3 55.47L1590.61 55.74L1590.88 55.98L1591.19 56.25L1591.7 56.87L1592.24 57.61L1592.51 58.03L1592.75 58.41L1592.97 58.88L1593.24 59.3L1593.29 59.73L1593.49 60.55L1593.64 61.02L1593.75 61.44L1593.91 61.87L1594.02 62.29L1594.18 62.72L1594.33 63.18L1594.8 64.43L1594.96 64.9L1595.27 65.75L1595.38 66.17L1595.54 66.6L1595.74 67.42L1595.92 67.8L1595.96 68.22L1596.07 68.58L1598.59 67.38L1603.52 65.08L1605.88 64.01L1608.23 63.03L1610.5 62.07L1612.75 61.18L1614.96 60.35L1617.1 59.62L1619.2 58.88L1621.25 58.26L1623.23 57.61L1625.24 57.1L1629.01 56.16L1630.86 55.78L1632.58 55.47L1634.32 55.2L1635.99 55.04L1637.62 54.89L1639.25 54.78L1640.76 54.78L1645.44 54.89L1649.84 55.16L1654.05 55.62L1658.02 56.25L1661.81 57.1L1665.38 58.1L1668.68 59.3L1671.82 60.66L1674.72 62.18L1677.4 63.92L1679.85 65.86L1682.1 67.91L1684.16 70.16L1685.99 72.62L1687.61 75.25L1689 78.04L1690.2 80.96L1691.14 84.12L1691.87 87.42L1692.45 90.88L1692.76 94.52L1692.88 98.33L1692.88 145.87L1692.81 147.77L1692.72 149.55L1692.56 151.34L1692.34 153.05L1692.07 154.79L1691.72 156.42L1691.29 158.05L1690.82 159.63L1690.29 161.15L1689.73 162.62L1689.08 164.09L1688.35 165.5L1687.57 166.92L1686.72 168.28L1685.83 169.6L1684.89 170.85L1683.89 172.12L1682.8 173.32L1681.64 174.53L1680.48 175.69L1679.23 176.78L1677.91 177.87L1676.71 178.83L1675.5 179.66L1674.19 180.5L1672.87 181.28L1671.51 182.02L1670.15 182.71L1668.68 183.38L1667.21 183.96L1665.69 184.54L1662.55 185.59L1659.18 186.44L1657.51 186.79L1655.72 187.13L1653.94 187.37L1650.26 187.8L1648.37 187.95L1646.43 188.06L1644.49 188.11L1640.09 188.11L1637.66 188.02L1635.32 187.84L1633 187.68L1630.7 187.44L1628.43 187.13L1626.24 186.75L1621.83 185.81L1619.67 185.23L1617.57 184.65L1615.47 183.96L1613.42 183.22L1611.39 182.4L1609.39 181.55L1607.4 180.62L1605.46 179.61L1603.52 178.56L1601.63 177.47L1599.73 176.31L1597.9 175.04L1596.07 173.72L1596.07 228.56L1596.01 229.61L1595.92 230.61L1595.81 231.5L1595.65 232.4L1595.43 233.24L1595.23 234.02L1594.96 234.8L1594.69 235.5L1594.33 236.19L1594.02 236.74L1593.6 237.32L1593.24 237.79L1592.75 238.28L1592.28 238.68L1591.77 239.06L1591.23 239.33L1590.65 239.58L1590.07 239.8L1589.45 239.91L1588.78 240L1587.4 240L1586.77 239.96L1586.15 239.8L1585.57 239.64L1584.99 239.42L1583.94 238.8L1583.47 238.44L1583.01 238.02L1582.58 237.48L1582.2 236.97L1581.85 236.39L1581.53 235.76L1581.27 235.07L1581 234.29L1580.8 233.51L1580.57 232.66L1580.42 231.73L1580.33 230.77L1580.22 229.72L1580.17 228.67L1580.17 65.64L1580.22 64.59L1580.26 63.65L1580.37 62.72L1580.49 61.82L1580.64 60.98L1580.84 60.2L1581.07 59.46L1581.31 58.72L1581.85 57.45L1582.16 56.94L1582.54 56.41L1582.89 55.94L1583.32 55.58L1583.79 55.2L1584.21 54.89L1584.72 54.62L1585.77 54.31L1586.35 54.2L1587.31 54.2L1587.62 54.26L1587.89 54.31ZM1632.85 71.73L1630.48 71.88L1628.18 72.1L1625.98 72.42L1623.88 72.73L1621.83 73.15L1619.89 73.67L1617.99 74.24L1616.17 74.89L1614.43 75.61L1612.91 76.3L1611.33 77.14L1609.77 78.08L1608.14 79.17L1606.51 80.44L1604.84 81.8L1603.1 83.32L1601.31 84.95L1599.48 86.69L1597.52 88.58L1595.49 90.57L1595.49 155.95L1596.07 155.95L1596.07 155.73L1600.78 158.52L1605.35 161.04L1609.77 163.36L1614 165.34L1618.11 167.08L1622.1 168.48L1625.91 169.69L1629.54 170.65L1633.05 171.32L1636.41 171.7L1639.62 171.85L1642.39 171.78L1645.07 171.7L1647.65 171.43L1650.15 171.12L1652.58 170.74L1654.88 170.22L1657.08 169.64L1659.18 168.91L1661.19 168.13L1663.06 167.17L1664.8 166.19L1666.9 164.87L1668.73 163.44L1670.35 161.93L1671.78 160.3L1672.98 158.56L1673.99 156.73L1674.77 154.79L1675.39 152.81L1675.86 150.64L1676.08 148.39L1676.2 146.07L1676.2 98.55L1676.08 95.81L1675.82 93.24L1675.3 90.88L1674.61 88.63L1673.68 86.53L1672.56 84.53L1671.2 82.7L1669.68 81.02L1667.9 79.51L1665.89 78.04L1663.71 76.76L1661.92 75.87L1660.03 75.05L1658.02 74.36L1655.93 73.73L1653.67 73.15L1651.31 72.68L1648.86 72.3L1646.27 71.99L1643.59 71.79L1640.83 71.68L1637.93 71.64L1635.36 71.68L1632.85 71.73Z"
    />
    <path
      id="b5Iz46OVaX"
      d="M673.4 17.63C684.78 26.19 690.66 38.32 690.66 53.06C690.66 59.88 687.83 63.3 682.1 63.3C678.11 63.3 675.28 59.88 673.6 53.06C672.45 47.4 670.19 42.29 667.36 36.94C662.21 27.86 651.26 23.71 634.2 23.71C619.24 23.71 609 27.13 602.76 34.48C597.05 41.31 593.64 51.74 593.64 67.06C593.64 73.04 593.64 120.63 593.64 126.56C593.64 142.1 597.05 152.9 603.29 159.72C610.12 167.12 620.55 171.05 635.36 171.05C657.71 171.05 670.77 163.13 673.6 147.61C674.7 141.88 675.28 139.05 675.28 138.47C676.44 135.06 678.69 133.38 682.1 133.38C687.83 133.38 690.66 136.8 690.66 143.62C690.66 158 684.93 168.8 672.82 177.36C663.17 183.6 651.04 187.02 635.14 187.02C616.79 187.02 602.56 183.02 592.12 174.46C579.99 166.54 574.91 152.9 574.91 135.06C574.91 135.06 574.91 135.06 574.91 135.06C574.91 135.06 574.91 135.06 574.91 135.06C574.91 92.15 574.91 68.27 574.91 63.5C574.91 25.76 594.22 7.41 634.4 7.41C650.46 7.41 663.01 10.82 673.4 17.63Z"
    />
    <path
      id="a1Z8HXsFzs"
      d="M1495.86 69.36C1500.41 63.65 1504.4 60.24 1508.39 58.57C1512.32 56.32 1518.05 55.16 1524.45 55.16C1543.96 55.16 1554.19 64.81 1554.19 83.74C1554.19 93.04 1554.19 167.28 1554.19 176.58C1554.19 184.54 1551.36 187.95 1545.7 187.95C1539.97 187.95 1537.71 184.54 1537.71 176.58C1537.71 167.86 1537.71 98.33 1537.71 89.63C1537.71 77.72 1532.63 71.26 1522.77 71.26C1515.37 71.26 1507.81 75.78 1501.57 84.53C1501.57 93.78 1501.57 168.06 1501.57 177.36C1501.57 185.28 1498.69 188.69 1493.58 188.69C1488.46 188.69 1485.62 185.28 1485.62 177.36C1485.62 168.75 1485.62 100.11 1485.62 91.51C1485.62 78.24 1479.96 71.99 1469.5 71.99C1462.74 71.99 1456.28 76.56 1449.48 85.26C1449.48 94.52 1449.48 168.28 1449.48 177.52C1449.48 185.5 1446.62 188.91 1440.91 188.91C1435.25 188.91 1433 185.5 1433 177.52C1433 166.12 1433 75.05 1433 63.65C1433 57.99 1435.25 55.74 1439.82 55.74C1442.07 55.74 1444.32 57.41 1445.48 60.82C1446.62 62.34 1447.16 65.17 1447.16 68.58C1447.16 68.58 1447.16 68.58 1447.16 68.58C1447.16 68.58 1447.16 68.58 1447.16 68.58C1452.51 62.92 1455.92 59.5 1457.39 58.35C1460.8 56.09 1465.35 54.93 1471.82 54.93C1480.9 54.93 1489.03 59.5 1495.86 69.36Z"
    />
    <path
      id="c704sxfG2q"
      d="M788.05 55.47L794.07 56.32L799.73 57.45L804.88 58.99L809.65 60.82L813.96 63.03L817.79 65.55L821.21 68.42L824.13 71.57L826.65 75.14L828.7 78.97L830.28 83.16L831.44 87.74L832.11 92.55L832.33 97.75L832.33 144.78L832.11 149.98L831.44 154.79L830.33 159.36L828.77 163.56L826.76 167.39L824.35 170.89L821.45 174.1L818.15 176.98L814.38 179.5L810.19 181.71L805.51 183.56L800.42 185.08L794.91 186.23L788.94 187.06L782.54 187.6L775.71 187.75L768.47 187.68L761.69 187.28L755.4 186.48L749.62 185.39L744.34 183.92L739.5 182.09L735.15 179.92L731.27 177.4L727.86 174.53L724.87 171.32L722.4 167.75L720.34 163.87L718.78 159.63L717.67 154.99L717 150.06L716.78 144.78L716.78 97.75L717 92.55L717.67 87.74L718.83 83.16L720.41 78.97L722.44 75.14L724.96 71.57L727.9 68.42L731.32 65.55L735.15 63.03L739.46 60.82L744.18 58.99L749.38 57.45L755.04 56.32L761.06 55.47L767.58 54.93L774.56 54.78L781.53 54.93L788.05 55.47ZM761.29 71.64L756.02 72.57L751.32 73.89L747.1 75.56L743.45 77.66L740.35 80.07L737.83 82.92L735.82 86.06L734.42 89.56L733.52 93.51L733.26 97.75L733.26 144.78L733.52 149.02L734.42 152.9L735.82 156.46L737.87 159.63L740.46 162.4L743.6 164.8L747.33 166.81L751.63 168.48L756.51 169.69L761.96 170.58L768 171L774.56 171.05L781 171L786.89 170.58L792.28 169.8L797.06 168.6L801.31 167.01L804.99 165.03L808.14 162.66L810.7 159.88L812.71 156.69L814.11 153.12L815.01 149.13L815.27 144.78L815.27 97.75L815.01 93.51L814.11 89.56L812.71 86.06L810.66 82.92L808.03 80.07L804.88 77.66L801.11 75.56L796.74 73.89L791.77 72.57L786.26 71.64L780.11 71.06L773.4 70.9L767.11 71.06L761.29 71.64Z"
    />
    <path
      id="a2dF9UjJYG"
      d="M1352.56 53.73L1354.5 53.84L1356.33 54L1358.11 54.11L1359.85 54.31L1361.57 54.46L1363.27 54.73L1364.89 54.93L1366.45 55.27L1367.97 55.51L1369.44 55.89L1370.91 56.2L1372.27 56.56L1373.7 56.98L1375.02 57.41L1376.27 57.83L1377.54 58.3L1378.74 58.84L1379.95 59.3L1381.1 59.88L1382.2 60.4L1383.25 60.98L1384.29 61.6L1385.45 62.45L1386.55 63.34L1387.59 64.23L1388.6 65.24L1389.56 66.22L1390.49 67.33L1391.38 68.42L1392.23 69.58L1393.01 70.79L1393.75 72.04L1394.42 73.31L1395.11 74.62L1396.27 77.46L1396.78 78.93L1397.25 80.4L1397.67 81.96L1398.05 83.54L1398.36 85.17L1398.63 86.84L1398.83 88.58L1399.03 90.37L1399.15 92.15L1399.26 93.98L1399.26 154.99L1399.3 155.8L1399.3 156.58L1399.41 158.05L1399.52 159.41L1399.61 160.1L1399.72 160.72L1399.84 161.3L1399.99 161.93L1400.08 162.51L1400.42 163.56L1400.62 164.09L1401.24 165.5L1401.46 165.92L1401.71 166.34L1401.98 166.7L1402.6 167.44L1403.29 168.13L1403.4 168.17L1403.56 168.28L1403.65 168.37L1403.87 168.44L1404.03 168.55L1404.45 168.75L1404.7 168.91L1405.23 169.11L1405.55 169.26L1405.86 169.38L1406.97 169.84L1408.22 170.34L1408.69 170.49L1409.16 170.69L1409.65 170.85L1410.12 171.05L1410.63 171.27L1411.21 171.47L1411.52 171.58L1412.17 171.9L1412.41 172.12L1412.68 172.28L1413.22 172.68L1413.42 172.94L1413.62 173.17L1413.84 173.41L1414 173.72L1414.15 173.99L1414.46 174.62L1414.58 175L1414.69 175.31L1414.78 175.73L1414.89 176.09L1414.93 176.51L1415.04 176.94L1415.09 177.4L1415.09 177.87L1415.16 178.36L1415.16 180.46L1415.04 180.97L1415 181.4L1414.89 181.86L1414.78 182.29L1414.62 182.71L1414.46 183.07L1414.26 183.45L1414.04 183.76L1413.53 184.38L1413.26 184.65L1412.95 184.92L1411.83 185.54L1411.01 185.86L1410.54 185.97L1410.01 186.06L1408.96 186.17L1408.38 186.23L1407.33 186.23L1407.13 186.17L1406.97 186.17L1406.75 186.12L1406.55 186.12L1406.33 186.06L1405.28 185.86L1405.03 185.74L1404.7 185.7L1404.39 185.59L1404.07 185.54L1402.98 185.23L1402.56 185.12L1402.2 185.01L1401.78 184.92L1401.31 184.81L1400.88 184.65L1400.42 184.54L1398.94 184.03L1398.25 183.76L1397.58 183.56L1396.94 183.29L1395.69 182.87L1395.11 182.67L1394.53 182.49L1394.02 182.29L1393.53 182.13L1393.01 181.98L1392.59 181.82L1392.12 181.66L1391.7 181.55L1391.34 181.4L1390.96 181.28L1390.34 181.08L1389.56 180.77L1389.33 180.7L1389.18 180.62L1389.02 180.55L1388.66 180.5L1388.33 180.46L1387.97 180.35L1387.66 180.24L1387.35 180.08L1387.08 179.88L1386.77 179.66L1386.5 179.46L1386.23 179.19L1385.99 178.88L1385.72 178.61L1385.5 178.25L1385.3 177.94L1385.03 177.52L1384.83 177.14L1384.67 176.74L1384.45 176.31L1384.25 175.84L1383.94 174.88L1383.31 172.79L1383.13 172.21L1380.84 173.79L1378.63 175.26L1377.58 176L1375.6 177.25L1374.64 177.87L1372.85 179.03L1371.18 180.08L1370.4 180.55L1369.66 180.97L1368.3 181.82L1367.61 182.18L1367.03 182.56L1365.36 183.38L1364.89 183.6L1364.05 184.03L1363.62 184.12L1362.95 184.45L1362.26 184.65L1360.79 185.16L1358.43 185.81L1357.65 185.97L1356.8 186.17L1355.97 186.32L1354.19 186.64L1353.3 186.75L1352.41 186.9L1349.57 187.22L1348.57 187.28L1347.57 187.37L1346.56 187.44L1345.51 187.48L1344.53 187.53L1339.65 187.53L1338.02 187.48L1336.44 187.44L1333.29 187.22L1330.26 186.9L1328.79 186.7L1327.32 186.44L1324.49 185.9L1321.77 185.28L1320.45 184.92L1319.13 184.5L1317.86 184.07L1316.61 183.6L1314.21 182.67L1313.05 182.09L1311.89 181.55L1310.79 180.97L1309.68 180.35L1308.63 179.72L1307.58 179.03L1306.38 178.21L1305.22 177.36L1303.03 175.46L1302.03 174.53L1301.07 173.52L1300.13 172.48L1299.29 171.43L1298.46 170.34L1297.68 169.18L1296.99 168.02L1296.3 166.81L1295.67 165.61L1295.1 164.34L1294.58 163.09L1294.11 161.77L1293.27 159.05L1292.95 157.67L1292.69 156.26L1292.26 153.32L1292.06 150.29L1292.06 147.14L1292.15 145.6L1292.26 144.04L1292.49 142.57L1293 139.63L1293.73 136.8L1294.2 135.44L1295.25 132.8L1295.9 131.49L1296.52 130.24L1297.99 127.83L1298.77 126.67L1299.62 125.56L1300.51 124.46L1301.5 123.42L1302.45 122.41L1303.5 121.43L1304.59 120.47L1306.91 118.69L1308.16 117.86L1310.37 116.28L1311.53 115.54L1313.94 114.18L1316.46 112.91L1317.77 112.36L1320.38 111.29L1321.77 110.82L1324.6 109.99L1326 109.61L1327.47 109.26L1328.95 108.94L1330.42 108.68L1331.93 108.41L1333.45 108.21L1335.03 108.05L1336.55 107.9L1338.18 107.78L1339.76 107.67L1341.39 107.63L1344.38 107.63L1345.74 107.67L1347.14 107.72L1349.97 107.94L1351.4 108.1L1352.87 108.25L1354.35 108.45L1355.86 108.72L1357.33 108.94L1358.85 109.26L1360.37 109.5L1361.95 109.84L1365.09 110.57L1369.98 111.82L1371.61 112.29L1373.32 112.76L1375.02 113.29L1376.73 113.8L1378.47 114.38L1380.26 114.96L1382.04 115.59L1382.04 95.5L1382 94.34L1381.93 93.24L1381.84 92.15L1381.68 91.04L1381.46 90.06L1381.26 88.99L1380.95 88L1380.64 87.05L1380.26 86.11L1379.83 85.22L1379.37 84.32L1378.32 82.65L1377.69 81.8L1377.07 81.07L1376.38 80.29L1374.91 78.93L1374.06 78.24L1372.27 76.99L1371.34 76.41L1370.33 75.87L1369.29 75.36L1368.19 74.82L1367.46 74.51L1365.87 73.89L1362.53 72.84L1359.85 72.22L1358.89 72.04L1358 71.88L1357.02 71.73L1356.06 71.57L1355.13 71.48L1353.14 71.26L1352.09 71.15L1351.09 71.1L1350.04 70.99L1348.99 70.94L1347.95 70.94L1346.9 70.9L1342.17 70.9L1339.69 70.99L1337.29 71.1L1335.03 71.32L1332.87 71.57L1330.77 71.88L1328.83 72.22L1326.94 72.62L1325.15 73.11L1323.48 73.67L1321.92 74.24L1320.38 74.89L1318.98 75.61L1317.66 76.34L1316.46 77.19L1315.34 78.04L1314.3 78.97L1313.36 79.98L1312.51 81.07L1311.73 82.18L1311.11 83.32L1310.48 84.59L1309.99 85.91L1309.59 87.27L1309.28 88.67L1309.17 89.36L1309.01 89.99L1308.79 91.15L1308.59 92.2L1308.39 93.13L1308.27 93.56L1308.21 93.98L1308.12 94.34L1308.05 94.72L1307.96 95.03L1307.9 95.34L1307.81 95.88L1307.69 96.3L1307.69 96.5L1307.65 96.66L1307.65 96.81L1307.58 96.92L1307.58 97.19L1307.43 97.55L1307.11 98.17L1306.96 98.44L1306.53 98.98L1306.38 99.22L1306.11 99.44L1305.91 99.64L1305.64 99.87L1305.44 100.02L1305.17 100.18L1304.86 100.34L1304.59 100.49L1304.28 100.58L1304.01 100.69L1303.7 100.8L1303.35 100.92L1303.03 100.96L1302.65 101.07L1302.3 101.12L1301.92 101.12L1301.56 101.16L1300.09 101.16L1299.47 101.12L1298.19 100.92L1297.61 100.8L1296.05 100.18L1295.56 99.87L1295.1 99.6L1294.67 99.22L1294.27 98.91L1293.53 98.08L1293.22 97.59L1292.69 96.66L1292.42 96.08L1292.26 95.5L1292.06 94.92L1291.91 94.29L1291.79 93.67L1291.75 92.98L1291.68 92.24L1291.68 90.52L1291.75 89.48L1291.79 88.47L1291.95 87.47L1292.06 86.49L1292.49 84.48L1293 82.5L1293.31 81.49L1293.62 80.56L1294 79.55L1294.43 78.62L1294.89 77.61L1295.83 75.72L1297.57 72.88L1298.19 71.99L1298.89 71.06L1301.07 68.38L1301.92 67.49L1302.86 66.37L1305.06 64.39L1306.27 63.45L1308.9 61.67L1310.33 60.87L1311.78 60.08L1313.36 59.35L1314.94 58.66L1316.61 58.03L1318.4 57.41L1320.18 56.87L1322.08 56.36L1324.02 55.89L1326 55.47L1328.05 55.09L1330.15 54.73L1334.57 54.2L1336.86 54L1339.23 53.84L1341.63 53.73L1344.11 53.68L1346.63 53.64L1348.61 53.64L1350.62 53.68L1352.56 53.73ZM1328.48 126.83L1321.65 129.24L1316.35 132.69L1312.51 137.11L1310.21 142.5L1309.48 148.93L1309.68 152.27L1310.33 155.42L1311.42 158.4L1312.93 161.15L1314.87 163.56L1317.35 165.61L1320.29 167.28L1322.81 168.64L1325.58 169.8L1328.57 170.74L1331.78 171.47L1335.19 172.01L1338.8 172.32L1342.64 172.43L1346.01 172.32L1349.24 172.12L1352.41 171.7L1355.48 171.05L1358.49 170.27L1361.48 169.18L1364.4 167.86L1366.41 166.7L1368.62 165.23L1371.07 163.6L1373.7 161.77L1376.53 159.72L1379.48 157.51L1382.58 155.17L1382.58 131.13L1377.22 129.5L1371.87 128.14L1366.57 126.98L1361.37 126.09L1356.29 125.4L1351.36 125L1346.63 124.89L1336.82 125.36L1328.48 126.83Z"
    />
    <path
      id="a3HkJ42x2Q"
      d="M966.8 0.38L967.42 0.58L968 0.89L968.54 1.2L969.05 1.58L969.52 2.01L970.37 2.94L970.75 3.52L971.06 4.15L971.37 4.84L971.64 5.51L972.04 7.09L972.35 8.88L972.46 10.86L972.53 11.91L972.53 180.29L972.46 181.08L972.42 181.81L972.35 182.5L972.04 183.75L971.88 184.33L971.64 184.87L971.42 185.38L970.79 186.34L970.06 187.07L969.63 187.43L969.21 187.7L968.7 187.97L968.23 188.21L967.69 188.43L967.11 188.59L965.86 188.79L965.22 188.86L964.08 188.86L962.81 188.7L962.38 188.59L962.03 188.43L961.65 188.32L961.29 188.12L960.98 187.97L960.67 187.74L960.36 187.48L959.82 186.96L959.55 186.65L958.93 185.54L958.77 185.13L958.62 184.64L958.5 184.17L958.35 183.71L958.3 183.19L958.3 182.39L958.26 181.97L958.26 181.61L958.19 181.19L958.19 180.83L958.15 180.41L958.15 179.98L958.08 179.56L958.04 179.09L957.99 178.67L957.99 178.2L957.88 177.26L957.88 176.73L957.84 176.26L957.77 175.68L957.77 174.59L957.72 174.01L957.72 172.73L956.36 173.58L955.09 174.43L953.8 175.25L951.37 176.73L950.28 177.46L949.12 178.15L947.02 179.4L946.02 179.98L945.08 180.56L944.14 181.08L941.62 182.5L940.89 182.86L940.15 183.28L938.79 183.91L937.63 184.44L937.05 184.64L936.2 184.98L935.31 185.29L934.42 185.54L932.55 186.07L929.54 186.69L928.49 186.92L926.39 187.23L924.19 187.54L923.09 187.65L920.8 187.85L919.64 187.9L918.43 187.97L917.27 188.01L916.07 188.05L911.5 188.05L909.4 188.01L907.42 187.9L905.41 187.74L903.47 187.59L901.53 187.32L899.7 187.07L896.02 186.43L892.56 185.6L890.83 185.13L889.2 184.64L887.57 184.09L884.43 182.93L882.91 182.23L881.44 181.57L880.01 180.83L878.61 180.03L877.24 179.25L875.86 178.4L874.46 177.42L871.74 175.21L870.51 174.05L869.31 172.85L868.17 171.58L867.1 170.28L866.12 168.9L865.16 167.54L863.49 164.62L862.75 163.08L862.13 161.52L861.5 159.89L860.97 158.26L860.5 156.52L860.14 154.74L859.81 152.95L859.56 151.13L859.34 149.23L859.25 147.29L859.25 95.24L859.34 93.3L859.56 91.47L859.76 89.69L860.07 87.91L860.5 86.17L860.92 84.49L861.43 82.87L862.01 81.28L862.64 79.77L863.37 78.25L864.11 76.78L864.96 75.35L865.89 73.99L866.85 72.68L867.9 71.36L868.95 70.16L870.11 68.95L871.31 67.79L873.92 65.61L875.35 64.6L876.6 63.76L877.87 62.97L879.23 62.19L880.66 61.46L882.06 60.77L883.53 60.08L886.57 58.94L888.15 58.36L891.41 57.4L894.75 56.57L896.49 56.26L898.27 55.95L900.06 55.68L901.89 55.42L905.57 55.1L907.46 54.99L909.4 54.95L913.91 54.95L916.43 55.06L917.63 55.1L918.9 55.15L920.06 55.26L921.26 55.37L922.36 55.46L923.52 55.62L925.72 55.95L926.77 56.11L928.87 56.51L929.87 56.73L930.81 56.93L933.64 57.73L934.49 58.05L935.38 58.36L936.2 58.67L937.1 58.98L937.94 59.36L938.84 59.72L939.73 60.14L940.66 60.57L942.45 61.5L945.28 63.09L946.24 63.64L949.07 65.54L951.06 66.9L952.02 67.64L953 68.37L954 69.17L955.98 70.85L955.98 11.91L956.05 10.86L956.14 8.88L956.48 7.09L956.63 6.31L956.88 5.51L957.1 4.84L957.41 4.15L957.72 3.52L958.08 2.94L958.46 2.48L958.88 2.01L959.31 1.58L959.82 1.2L960.29 0.89L960.82 0.58L961.4 0.38L962.65 0.07L963.28 0L964.75 0L965.44 0.07L966.8 0.38ZM909.82 72.32L907.19 72.56L904.63 72.83L902.11 73.26L899.75 73.79L897.43 74.35L895.29 75.08L893.23 75.89L891.29 76.82L889.51 77.83L887.46 79.3L885.52 80.86L883.8 82.55L882.26 84.34L880.9 86.17L879.76 88.15L878.76 90.25L878.03 92.46L877.49 94.77L877.13 97.14L877.02 99.66L877.02 144.88L877.13 147.49L877.45 149.97L877.91 152.33L878.65 154.58L879.54 156.68L880.66 158.69L882.02 160.56L883.58 162.3L885.32 163.93L887.3 165.33L889.51 166.71L891.45 167.61L893.46 168.43L895.55 169.17L897.76 169.9L900.01 170.53L902.42 171.06L904.9 171.53L907.51 171.91L910.18 172.16L912.97 172.31L915.85 172.38L920.46 172.27L922.74 172.11L924.92 171.91L929.23 171.26L931.28 170.86L933.28 170.33L935.22 169.75L937.05 169.12L938.79 168.39L940.24 167.38L941.78 166.33L943.34 165.24L944.92 164.04L946.55 162.83L948.22 161.52L949.96 160.16L951.68 158.73L953.46 157.21L955.32 155.63L957.14 154L957.14 88.06L955 86.52L952.91 85.12L950.9 83.69L948.92 82.38L947.02 81.17L945.24 80.08L943.5 79.03L941.87 78.14L940.35 77.36L938.95 76.67L937.63 76.13L935.74 75.42L933.84 74.77L931.9 74.19L929.92 73.68L927.93 73.26L925.88 72.94L923.78 72.63L921.73 72.41L919.57 72.25L915.27 72.16L912.55 72.21L909.82 72.32Z"
    />
    <path
      id="d2iPJF0rB9"
      d="M1247.51 17.63C1258.9 26.19 1264.77 38.32 1264.77 53.06C1264.77 59.88 1261.94 63.3 1256.23 63.3C1252.28 63.3 1249.45 59.88 1247.73 53.06C1246.57 47.4 1244.32 42.29 1241.49 36.94C1236.34 27.86 1225.36 23.71 1208.33 23.71C1193.36 23.71 1183.13 27.13 1176.88 34.48C1171.22 41.31 1167.81 51.74 1167.81 67.06C1167.81 73.04 1167.81 120.63 1167.81 126.56C1167.81 142.1 1171.22 152.9 1177.46 159.72C1184.29 167.12 1194.68 171.05 1209.46 171.05C1231.83 171.05 1244.9 163.13 1247.73 147.61C1248.87 141.88 1249.45 139.05 1249.45 138.47C1250.56 135.06 1252.86 133.38 1256.23 133.38C1261.94 133.38 1264.77 136.8 1264.77 143.62C1264.77 158 1259.1 168.8 1246.99 177.36C1237.27 183.6 1225.16 187.02 1209.26 187.02C1190.89 187.02 1176.68 183.02 1166.29 174.46C1154.7 166.54 1149.03 152.9 1149.03 135.06C1149.03 135.06 1149.03 135.06 1149.03 135.06C1149.03 135.06 1149.03 135.06 1149.03 135.06C1149.03 92.15 1149.03 68.27 1149.03 63.5C1149.03 25.76 1168.54 7.41 1208.53 7.41C1224.63 7.41 1237.12 10.82 1247.51 17.63Z"
    />
    <path
      id="dzhlmAMnT"
      d="M1072.05 55.58L1076.4 56.09L1080.55 56.87L1084.5 57.83L1088.22 58.99L1091.72 60.4L1095.05 61.98L1098.08 63.81L1100.95 65.86L1103.59 68.07L1105.99 70.52L1108.2 73.15L1110.25 76.03L1112.04 79.13L1113.62 82.38L1114.98 85.91L1116.12 89.56L1117.08 93.51L1117.81 97.59L1118.33 101.96L1118.64 106.47L1118.75 111.24L1118.71 112.4L1118.64 113.49L1118.55 114.54L1118.44 115.54L1118.24 116.55L1118.01 117.44L1117.75 118.33L1117.5 119.11L1117.19 119.85L1116.81 120.58L1116.39 121.21L1115.92 121.83L1115.45 122.41L1114.4 123.37L1113.13 124.11L1111.77 124.62L1110.99 124.84L1110.21 124.93L1109.36 125.04L1020.22 125.05L1020.21 142.68L1020.32 145.14L1020.52 147.54L1020.94 149.82L1021.48 151.96L1022.21 154.01L1023.04 155.95L1024.09 157.74L1025.25 159.45L1026.61 161.04L1028.08 162.55L1029.77 163.91L1031.6 165.18L1033.54 166.34L1035.68 167.39L1038 168.33L1040.41 169.18L1043.04 169.84L1045.83 170.49L1048.75 170.96L1051.85 171.32L1055.11 171.63L1058.52 171.78L1062.09 171.85L1063.4 171.85L1064.72 171.78L1065.97 171.78L1068.49 171.7L1069.69 171.58L1070.85 171.54L1073.15 171.32L1074.26 171.23L1075.35 171.05L1078.5 170.58L1080.51 170.16L1082.4 169.76L1083.29 169.49L1084.19 169.26L1085.08 169.02L1085.9 168.71L1087.17 168.28L1087.64 168.06L1088.15 167.9L1088.69 167.66L1089.27 167.44L1089.85 167.17L1090.47 166.86L1091.1 166.59L1092.46 165.88L1093.19 165.5L1093.93 165.07L1094.71 164.65L1095.51 164.18L1096.34 163.71L1097.19 163.2L1098.08 162.66L1098.97 162.08L1099.91 161.46L1101.91 160.19L1102.92 159.52L1103.97 158.78L1104.59 158.2L1105.26 157.62L1105.84 157.11L1106.48 156.58L1107.04 156.11L1107.62 155.68L1108.67 154.84L1109.16 154.48L1109.67 154.1L1110.14 153.79L1110.57 153.48L1110.99 153.21L1111.41 153.01L1111.77 152.74L1112.51 152.43L1112.82 152.27L1113.44 152.07L1113.71 152L1113.93 151.96L1114.76 151.96L1115.34 152L1115.87 152.07L1116.81 152.27L1117.28 152.43L1117.7 152.58L1118.13 152.81L1118.48 153.01L1118.79 153.28L1119.44 153.9L1119.69 154.21L1119.95 154.59L1120.38 155.42L1120.53 155.88L1120.69 156.42L1120.91 157.47L1120.96 158.05L1121 158.67L1121 159.99L1120.91 160.68L1120.85 161.35L1120.69 161.97L1120.53 162.66L1120.33 163.36L1120.07 164.02L1119.75 164.65L1119.44 165.34L1119.06 166.03L1118.24 167.39L1117.75 168.02L1117.23 168.71L1116.07 170.07L1114.02 172.12L1111.66 174.15L1110.77 174.88L1107.85 176.98L1106.26 177.98L1104.59 178.99L1102.92 179.88L1101.13 180.77L1099.28 181.55L1097.39 182.33L1095.45 183.07L1093.42 183.76L1091.32 184.38L1089.16 184.96L1086.95 185.54L1084.7 186.01L1082.4 186.44L1079.97 186.86L1077.52 187.17L1075 187.48L1072.41 187.68L1069.8 187.91L1064.34 188.11L1061.51 188.11L1056.62 188.06L1051.96 187.8L1047.5 187.37L1043.24 186.75L1039.25 186.01L1035.44 185.08L1031.8 183.96L1028.46 182.67L1025.25 181.24L1022.3 179.61L1019.58 177.83L1017.06 175.84L1014.77 173.72L1012.65 171.43L1010.82 168.91L1009.15 166.28L1007.72 163.44L1006.52 160.46L1005.51 157.27L1004.73 153.94L1004.22 150.44L1003.84 146.72L1003.73 142.84L1003.73 97.01L1003.8 95.72L1003.84 94.34L1003.95 93.09L1004.11 91.77L1004.31 90.46L1004.84 87.94L1005.2 86.73L1005.58 85.48L1006 84.28L1006.47 83.08L1006.98 81.92L1008.14 79.6L1008.83 78.46L1009.5 77.34L1010.24 76.25L1011.09 75.2L1011.87 74.16L1012.76 73.11L1014.66 71.1L1015.7 70.1L1017.06 68.8L1018.49 67.58L1020.01 66.37L1021.52 65.28L1023.15 64.23L1024.89 63.23L1026.61 62.29L1028.46 61.4L1030.29 60.62L1032.23 59.82L1034.23 59.15L1038.43 57.88L1040.57 57.36L1042.82 56.87L1045.09 56.47L1047.44 56.16L1049.87 55.83L1052.32 55.58L1054.79 55.42L1057.36 55.27L1059.99 55.2L1062.67 55.16L1067.48 55.27L1072.05 55.58ZM1051.69 71.64L1047.61 72.3L1043.67 73.31L1039.9 74.56L1036.22 76.1L1032.76 77.88L1029.35 80.4L1026.52 83.01L1024.24 85.84L1022.46 88.78L1021.21 91.88L1020.48 95.14L1020.21 98.55L1020.21 108.21L1102.07 108.21L1101.22 98.4L1098.66 90.06L1094.4 83.23L1088.42 77.92L1080.77 74.09L1071.32 71.84L1060.19 71.06L1055.89 71.21L1051.69 71.64Z"
    />
  </svg>
)

export default memo(FccLogo)
