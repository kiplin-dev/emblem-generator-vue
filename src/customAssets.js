const assets = {}

assets.bg_defs = {"0":{"size":256,"t":false,"p":""},"circle":{"size":256,"t":true,"p":["M 100.42 16.12 C 108.83 14.28 117.39 12.80 126.04 13.23 C 126.11 15.03 126.18 16.83 126.27 18.64 C 122.01 19.35 117.68 19.31 113.39 19.68 C 109.45 20.25 105.57 21.26 101.62 21.81 C 101.22 19.91 100.83 18.01 100.42 16.12 Z  M 129.93 13.23 C 138.64 12.88 147.34 14.12 155.76 16.31 C 155.29 18.15 154.82 19.99 154.35 21.83 C 146.27 19.97 138.04 19.36 129.81 18.73 C 129.86 16.90 129.90 15.06 129.93 13.23 Z  M 72.43 27.21 C 80.00 23.04 88.02 19.72 96.32 17.30 C 96.89 19.21 97.45 21.12 98.02 23.04 C 90.02 25.17 82.44 28.59 75.14 32.45 C 74.25 30.70 73.34 28.95 72.43 27.21 Z  M 159.65 17.29 C 167.99 19.73 176.05 23.04 183.64 27.27 C 182.70 28.99 181.76 30.71 180.83 32.44 C 173.61 28.58 166.08 25.25 158.16 23.08 C 158.65 21.15 159.15 19.22 159.65 17.29 Z  M 88.21 27.54 C 104.49 20.45 122.75 18.28 140.32 20.55 C 139.94 22.27 139.58 23.99 139.22 25.72 C 122.80 24.50 105.92 26.19 90.61 32.49 C 89.82 30.84 89.02 29.19 88.21 27.54 Z  M 143.70 20.99 C 161.28 23.05 177.90 30.57 192.12 40.93 C 190.99 42.33 189.87 43.74 188.77 45.16 C 183.64 41.95 178.70 38.38 173.13 35.93 C 163.73 31.16 153.46 28.43 143.19 26.28 C 143.37 24.52 143.54 22.76 143.70 20.99 Z  M 43.43 60.76 C 54.23 46.89 68.45 35.47 84.88 29.01 C 85.56 30.66 86.25 32.30 86.96 33.94 C 71.84 40.67 58.28 51.02 47.96 63.96 C 46.45 62.88 44.94 61.82 43.43 60.76 Z  M 48.29 45.14 C 54.56 39.14 61.41 33.72 68.92 29.34 C 69.90 31.01 70.90 32.68 71.90 34.34 C 64.77 38.51 58.51 43.92 52.22 49.22 C 50.94 47.83 49.63 46.47 48.29 45.14 Z  M 184.15 34.39 C 185.14 32.71 186.13 31.03 187.11 29.35 C 194.59 33.73 201.43 39.13 207.68 45.11 C 206.32 46.55 204.97 48.00 203.62 49.45 C 197.78 43.63 191.11 38.76 184.15 34.39 Z  M 191.70 47.68 C 192.80 46.18 193.88 44.66 194.96 43.15 C 204.14 50.27 211.94 59.05 218.36 68.71 C 221.39 73.81 224.24 79.03 226.94 84.31 C 225.23 85.04 223.53 85.78 221.83 86.53 C 214.57 71.73 204.62 58.05 191.70 47.68 Z  M 29.69 68.77 C 34.22 61.35 39.31 54.19 45.53 48.09 C 46.92 49.42 48.32 50.73 49.72 52.04 C 44.13 58.07 39.01 64.57 34.84 71.67 C 33.13 70.69 31.41 69.73 29.69 68.77 Z  M 206.29 52.06 C 207.74 50.75 209.18 49.43 210.62 48.11 C 216.66 54.34 221.84 61.35 226.31 68.77 C 224.58 69.73 222.86 70.70 221.14 71.68 C 217.05 64.54 211.88 58.07 206.29 52.06 Z  M 41.18 63.65 C 42.63 64.75 44.10 65.84 45.57 66.92 C 36.00 80.47 29.59 96.20 26.98 112.58 C 25.12 112.45 23.27 112.33 21.41 112.21 C 23.76 94.69 30.71 77.88 41.18 63.65 Z  M 18.02 96.09 C 20.16 87.70 23.64 79.70 27.81 72.14 C 29.48 73.14 31.15 74.13 32.83 75.12 C 28.87 82.31 26.00 90.00 23.43 97.77 C 21.63 97.20 19.83 96.64 18.02 96.09 Z  M 223.26 74.99 C 224.97 74.07 226.67 73.14 228.37 72.20 C 232.29 79.88 235.93 87.77 238.00 96.17 C 236.18 96.70 234.36 97.24 232.54 97.79 C 230.13 89.92 226.97 82.33 223.26 74.99 Z  M 223.33 90.08 C 224.97 89.34 226.61 88.60 228.24 87.85 C 234.40 104.24 237.15 122.20 234.63 139.59 C 232.93 139.40 231.23 139.21 229.54 139.03 C 229.83 129.00 230.17 118.84 228.16 108.95 C 226.89 102.58 225.09 96.33 223.33 90.08 Z  M 16.86 100.10 C 18.81 100.63 20.77 101.15 22.72 101.67 C 20.57 109.53 19.49 117.68 19.26 125.82 C 17.24 125.78 15.23 125.75 13.22 125.73 C 13.68 117.11 14.90 108.51 16.86 100.10 Z  M 233.42 101.63 C 235.32 101.14 237.22 100.63 239.12 100.12 C 241.11 108.51 242.34 117.11 242.79 125.73 C 240.77 125.75 238.76 125.78 236.74 125.82 C 236.46 117.68 235.36 109.55 233.42 101.63 Z  M 20.70 115.53 C 22.64 115.89 24.58 116.25 26.53 116.59 C 24.35 133.03 27.93 149.56 32.87 165.20 C 31.21 165.99 29.56 166.78 27.91 167.59 C 23.85 156.82 21.25 145.50 20.45 134.01 C 20.34 127.85 20.58 121.69 20.70 115.53 Z  M 13.24 129.83 C 15.24 129.77 17.24 129.70 19.24 129.62 C 19.60 137.87 20.99 146.04 22.78 154.09 C 20.87 154.49 18.96 154.92 17.06 155.34 C 15.11 146.96 13.78 138.41 13.24 129.83 Z  M 236.79 129.62 C 238.78 129.70 240.77 129.77 242.77 129.83 C 242.25 138.41 240.86 146.95 238.96 155.33 C 237.05 154.89 235.14 154.46 233.23 154.05 C 235.11 146.03 236.29 137.85 236.79 129.62 Z  M 210.20 187.67 C 219.84 174.32 226.09 158.67 228.89 142.47 C 230.74 142.76 232.59 143.07 234.44 143.39 C 231.76 160.68 224.79 177.15 214.48 191.28 C 213.03 190.10 211.59 188.90 210.20 187.67 Z  M 18.29 159.00 C 20.19 158.68 22.10 158.36 24.01 158.04 C 26.21 165.79 29.43 173.18 33.25 180.26 C 31.55 181.21 29.85 182.16 28.14 183.11 C 23.95 175.49 20.29 167.50 18.29 159.00 Z  M 232.04 157.64 C 233.93 158.15 235.82 158.66 237.72 159.16 C 235.64 167.55 232.06 175.47 227.93 183.02 C 226.18 182.07 224.44 181.12 222.69 180.18 C 226.73 173.10 229.91 165.51 232.04 157.64 Z  M 29.25 170.87 C 30.96 170.22 32.68 169.56 34.39 168.89 C 38.81 177.12 43.63 185.19 49.56 192.42 C 54.11 198.06 59.82 202.58 64.85 207.75 C 63.66 209.14 62.46 210.52 61.26 211.91 C 58.87 209.55 56.23 207.46 53.41 205.66 C 58.74 211.59 65.42 216.06 72.11 220.29 C 71.27 222.05 70.34 223.77 69.35 225.46 C 61.93 221.05 54.90 215.87 48.81 209.72 C 50.39 208.19 52.03 206.74 53.73 205.35 C 47.81 199.49 42.42 193.09 37.76 186.19 C 34.71 181.20 31.96 176.04 29.25 170.87 Z  M 30.27 186.70 C 31.89 185.65 33.51 184.60 35.12 183.54 C 39.43 190.53 44.61 196.89 50.11 202.97 C 48.73 204.27 47.36 205.59 46.00 206.91 C 39.89 200.91 34.72 194.00 30.27 186.70 Z  M 220.93 183.58 C 222.56 184.54 224.19 185.49 225.84 186.45 C 221.43 193.87 216.17 200.83 210.02 206.90 C 208.68 205.54 207.33 204.20 205.98 202.87 C 211.49 196.85 216.54 190.45 220.93 183.58 Z  M 190.10 208.08 C 196.74 203.14 202.19 196.90 207.85 190.92 C 209.35 191.98 210.85 193.03 212.36 194.07 C 201.45 207.86 187.10 218.84 171.02 225.93 C 170.42 224.26 169.82 222.59 169.21 220.93 C 176.51 217.21 183.46 212.86 190.10 208.08 Z  M 199.63 208.67 C 200.85 207.52 202.25 206.58 203.73 205.80 C 204.82 207.17 205.94 208.51 207.11 209.81 C 201.08 215.87 194.13 220.98 186.82 225.38 C 185.82 223.67 184.85 221.96 183.91 220.23 C 189.48 216.87 194.87 213.13 199.63 208.67 Z  M 64.37 213.99 C 65.56 212.63 66.76 211.27 67.94 209.90 C 76.16 215.63 85.15 220.21 94.58 223.57 C 100.71 225.77 107.15 226.88 113.43 228.51 C 113.14 230.26 112.85 232.01 112.57 233.76 C 95.15 231.45 78.51 224.36 64.37 213.99 Z  M 72.87 227.57 C 73.75 225.80 74.66 224.05 75.60 222.31 C 82.79 226.27 90.48 229.21 98.26 231.79 C 97.70 233.56 97.15 235.35 96.61 237.13 C 88.26 235.15 80.47 231.46 72.87 227.57 Z  M 146.36 227.52 C 152.91 226.33 159.20 224.11 165.64 222.45 C 166.32 224.10 167.01 225.76 167.70 227.41 C 151.46 233.97 133.70 235.72 116.33 234.31 C 116.52 232.45 116.70 230.59 116.86 228.73 C 126.71 229.80 136.62 229.23 146.36 227.52 Z  M 157.94 231.74 C 165.67 229.15 173.29 226.19 180.46 222.29 C 181.40 224.01 182.33 225.75 183.23 227.50 C 175.62 231.44 167.81 235.13 159.44 237.12 C 158.95 235.32 158.46 233.52 157.94 231.74 Z  M 101.87 232.56 C 109.70 234.53 117.77 235.66 125.86 235.82 C 125.96 237.81 126.07 239.80 126.16 241.80 C 117.52 241.66 108.92 240.34 100.52 238.33 C 100.98 236.41 101.43 234.48 101.87 232.56 Z  M 130.14 235.81 C 138.23 235.67 146.32 234.56 154.14 232.48 C 154.62 234.41 155.12 236.34 155.63 238.27 C 147.19 240.35 138.53 241.65 129.84 241.80 C 129.93 239.80 130.04 237.80 130.14 235.81 Z"]},"heart":{"size":256,"t":true,"p":["M 44.04 24.08 C 53.57 18.15 64.75 14.69 75.99 14.64 C 85.33 15.62 94.90 17.82 102.72 23.27 C 109.15 28.14 114.86 34.06 119.10 40.94 C 122.73 46.88 125.87 53.10 129.01 59.30 C 132.19 52.81 135.62 46.43 139.31 40.22 C 147.08 28.36 158.85 18.31 173.22 16.02 C 184.99 12.83 197.45 15.77 208.21 20.92 C 225.38 29.10 237.29 46.07 241.58 64.33 C 243.41 71.45 242.85 78.86 243.53 86.11 C 244.18 92.20 242.81 98.22 242.13 104.24 C 239.88 115.97 236.53 127.56 231.28 138.32 C 222.05 156.46 209.77 173.01 195.07 187.08 C 185.44 196.90 174.58 205.40 163.56 213.57 C 160.24 216.68 156.45 219.17 152.61 221.58 C 144.89 227.64 136.77 233.15 129.02 239.18 C 118.74 231.31 108.18 223.81 97.66 216.27 C 92.37 211.54 86.23 207.90 80.98 203.11 C 69.17 194.01 58.73 183.26 48.87 172.10 C 37.48 158.11 27.59 142.64 21.38 125.63 C 17.58 113.77 14.61 101.53 14.31 89.03 C 15.20 79.22 14.42 69.12 17.60 59.64 C 22.25 45.40 31.21 32.15 44.04 24.08 Z"]}};

assets.defs = {"eagle":{"size":256,"p2":[" M 97.27 58.27 C 106.37 49.80 118.34 43.43 131.05 43.84 C 142.67 44.84 154.25 46.49 165.68 48.85 C 168.79 49.31 171.12 51.57 172.72 54.14 C 173.61 59.47 176.15 64.54 175.86 70.04 C 175.76 72.76 174.31 75.63 171.71 76.72 C 166.89 79.05 161.51 80.32 157.08 83.40 C 156.66 83.69 155.83 84.26 155.41 84.54 C 155.38 85.58 155.34 86.63 155.30 87.67 C 159.49 90.77 164.68 91.78 169.63 93.00 C 167.12 97.90 163.05 102.26 162.48 107.95 C 162.33 112.38 162.25 116.83 162.60 121.25 C 163.47 125.66 164.57 130.03 165.63 134.40 C 167.23 141.15 171.31 147.16 171.98 154.15 C 171.50 153.88 170.53 153.35 170.05 153.08 C 163.01 148.55 157.23 142.22 149.80 138.31 C 151.01 143.68 154.14 148.27 156.96 152.90 C 157.17 153.41 157.60 154.43 157.81 154.94 C 158.81 162.13 163.13 168.25 164.27 175.39 C 155.49 170.46 150.25 161.61 143.66 154.35 C 139.85 149.94 135.54 145.99 130.68 142.77 C 131.62 149.39 132.04 156.20 130.75 162.81 C 129.63 168.69 126.27 173.76 123.89 179.16 C 121.74 183.13 118.62 186.47 116.25 190.31 C 112.97 195.22 108.11 198.71 103.17 201.78 L 103.32 200.80 C 104.24 193.22 105.90 185.66 105.46 177.99 C 105.21 172.10 103.83 166.35 102.23 160.70 C 100.36 154.03 99.81 147.03 97.38 140.51 C 96.32 137.69 95.35 134.83 94.49 131.94 C 93.64 147.25 92.43 163.22 85.01 176.98 C 82.12 182.17 78.97 187.78 73.38 190.47 C 74.41 184.97 75.89 179.53 76.33 173.94 C 76.61 162.96 76.16 151.96 76.61 140.98 C 76.81 133.93 78.54 127.01 78.65 119.95 C 77.19 120.83 75.72 121.70 74.34 122.70 C 71.24 125.09 68.23 127.68 64.79 129.56 C 63.62 129.71 62.45 129.86 61.28 130.00 C 64.37 125.05 67.71 120.18 69.70 114.66 C 71.73 108.81 72.82 102.68 74.63 96.76 C 76.92 88.36 80.33 80.29 84.70 72.76 C 87.92 67.17 92.78 62.82 97.27 58.27 M 143.01 59.86 C 144.18 60.53 145.39 61.14 146.62 61.70 C 146.36 63.77 145.77 65.87 146.15 67.96 C 147.54 73.36 154.15 77.31 159.31 74.24 C 164.51 71.48 164.60 64.99 167.52 60.51 C 159.42 59.14 151.17 59.21 143.01 59.86 Z"],"p1":[" M 174.04 55.09 C 181.46 55.40 188.60 57.74 195.38 60.62 C 202.78 63.88 206.40 71.84 208.88 79.05 C 210.76 84.00 211.26 89.84 208.16 94.44 C 206.93 91.17 205.10 88.14 202.12 86.19 C 192.33 90.12 181.61 90.53 171.27 91.85 C 170.71 92.21 170.16 92.59 169.63 93.00 C 164.68 91.78 159.49 90.77 155.30 87.67 C 155.34 86.63 155.38 85.58 155.41 84.54 C 155.83 84.26 156.66 83.69 157.08 83.40 C 162.04 81.61 167.08 79.96 171.81 77.59 C 175.05 76.07 177.11 72.53 177.27 69.02 C 176.50 64.31 174.63 59.85 174.04 55.09 Z"," M 147.83 67.85 C 147.01 65.42 148.08 61.83 151.02 61.59 C 154.76 61.13 158.54 61.51 162.29 61.74 C 162.41 64.13 162.86 66.57 162.38 68.94 C 160.49 71.54 157.52 74.14 154.06 73.48 C 151.35 72.57 148.94 70.51 147.83 67.85 Z"," M 50.19 162.81 C 52.62 148.10 61.71 134.71 74.22 126.72 C 74.81 132.59 72.73 138.25 70.65 143.63 C 68.59 148.29 66.61 153.25 62.84 156.83 C 59.14 159.77 54.40 160.84 50.19 162.81 Z"," M 160.08 152.62 C 167.28 155.69 174.23 159.64 179.87 165.13 C 187.88 172.56 185.35 186.82 176.75 192.77 C 175.28 189.19 175.60 185.23 174.50 181.56 C 171.68 171.05 165.93 161.67 160.08 152.62 Z"," M 135.22 153.65 C 144.41 158.66 148.32 170.86 145.12 180.57 C 142.45 190.83 132.69 196.63 127.03 205.05 C 121.71 200.10 120.75 191.52 124.29 185.29 C 127.10 179.00 132.82 174.35 134.65 167.58 C 136.14 163.07 135.34 158.28 135.22 153.65 Z"," M 92.91 159.62 C 96.40 163.29 98.13 168.41 99.31 173.25 C 99.44 179.40 100.44 185.95 97.88 191.77 C 93.82 201.81 85.99 209.59 80.40 218.74 C 77.94 211.61 78.54 203.69 81.76 196.90 C 85.18 189.79 88.09 182.47 91.19 175.23 C 93.32 170.28 92.05 164.79 92.91 159.62 Z"],"pt1":[],"pto2":[]},"lion":{"size":256,"p2":[" M 105.21 55.36 C 112.44 51.73 120.80 49.99 128.85 51.17 C 135.45 51.71 141.84 53.50 148.30 54.87 C 147.17 57.90 145.21 60.64 144.91 63.94 C 144.44 66.42 143.43 69.53 145.49 71.57 C 149.12 75.07 154.78 73.51 158.69 71.31 C 157.97 67.28 157.61 63.16 156.34 59.25 C 160.29 57.96 164.26 61.00 167.98 62.23 C 172.29 63.83 177.40 65.70 178.31 70.88 L 178.98 70.07 C 178.81 70.79 178.47 72.24 178.30 72.97 C 180.01 71.24 182.59 71.04 184.54 72.32 C 190.13 75.03 195.20 78.72 199.75 82.94 C 199.60 84.32 199.46 85.71 199.33 87.09 C 197.27 85.99 195.19 84.92 193.07 83.93 C 194.40 85.63 195.98 87.16 197.02 89.08 C 197.94 93.01 197.62 97.25 194.86 100.39 C 192.09 99.21 189.12 98.16 186.06 98.37 C 182.32 98.57 178.42 97.95 174.89 99.54 C 177.08 95.24 180.17 91.39 181.86 86.85 C 179.79 82.21 178.16 77.42 177.47 72.37 C 174.88 72.83 172.29 73.22 169.70 73.63 C 171.97 75.63 174.78 77.01 176.81 79.28 C 178.21 81.61 179.49 84.16 179.90 86.86 C 176.47 94.85 171.12 101.93 167.90 110.05 C 166.34 113.58 166.23 117.97 169.25 120.79 C 171.69 124.46 176.46 125.34 179.42 128.24 C 177.80 132.23 173.73 134.91 170.04 137.06 C 168.99 138.73 167.45 140.00 165.31 139.84 C 165.63 139.32 166.26 138.30 166.57 137.79 C 163.46 137.95 160.68 136.39 159.00 133.81 C 160.86 132.71 162.97 133.14 164.99 133.29 C 162.40 131.19 158.69 130.16 157.39 126.81 C 158.19 126.69 159.78 126.44 160.57 126.32 C 159.49 125.06 158.42 123.80 157.37 122.52 C 157.15 122.77 156.70 123.26 156.48 123.51 C 154.71 122.75 152.83 122.40 150.92 122.34 C 152.78 115.31 157.02 109.34 159.96 102.82 C 154.44 101.39 149.27 104.27 144.50 106.65 C 135.73 112.52 132.86 123.97 133.74 133.97 C 134.99 139.78 136.78 145.65 140.44 150.43 C 146.08 159.87 153.69 167.96 159.26 177.44 C 161.73 181.45 161.94 186.29 161.32 190.84 C 158.49 183.99 155.40 177.14 150.66 171.34 C 144.82 164.35 140.08 156.56 134.90 149.09 C 131.61 142.91 129.77 135.95 129.51 128.95 C 129.11 124.09 130.88 119.45 132.01 114.80 C 133.41 109.65 137.47 105.89 141.61 102.81 C 146.38 98.84 152.57 97.48 158.23 95.32 C 158.31 94.38 158.98 93.39 158.51 92.48 C 155.69 87.99 151.34 84.74 146.82 82.11 C 142.94 79.85 138.32 80.45 134.03 80.30 C 127.26 80.01 121.51 84.48 117.02 89.06 C 109.28 99.43 103.56 112.72 106.36 125.84 C 107.81 135.75 113.11 144.40 118.17 152.83 C 123.36 161.09 130.13 168.23 135.06 176.66 C 138.60 181.68 142.33 186.72 144.31 192.61 C 144.28 194.41 144.28 196.20 144.25 198.00 C 143.13 201.50 141.83 205.04 139.09 207.62 C 139.87 203.44 141.23 199.17 140.24 194.90 C 139.39 192.20 138.15 189.66 137.03 187.07 C 135.16 182.86 131.80 179.61 129.38 175.76 C 124.29 167.27 118.13 159.50 112.76 151.20 C 105.24 141.65 99.40 130.29 98.71 117.96 C 98.47 111.38 98.19 104.59 100.58 98.33 C 104.14 85.91 114.33 75.38 126.76 71.77 C 132.43 70.04 138.13 71.69 143.88 71.73 C 142.61 68.69 140.27 66.28 137.60 64.43 C 133.72 61.25 128.52 60.86 123.80 59.87 C 119.18 59.49 114.51 60.57 110.18 62.15 C 104.61 64.04 100.32 68.24 95.77 71.79 C 89.28 76.98 85.54 84.52 81.20 91.41 C 81.62 84.45 84.85 78.15 88.06 72.12 C 91.96 64.96 98.50 59.74 105.21 55.36 Z"," M 146.29 68.44 C 148.28 62.98 149.62 56.56 154.36 52.75 C 154.64 54.82 154.80 56.90 155.13 58.96 C 154.66 62.72 154.59 66.57 156.07 70.13 C 152.90 72.65 148.54 71.61 146.29 68.44 Z"," M 59.72 96.67 C 60.56 96.57 61.40 96.47 62.24 96.35 C 62.41 98.91 61.75 101.73 63.32 103.97 C 65.20 114.45 68.18 124.88 73.52 134.15 C 75.49 138.23 77.52 142.28 79.72 146.24 C 83.14 152.26 88.05 157.22 92.47 162.48 C 96.59 168.33 99.69 174.90 101.37 181.87 C 101.64 184.09 100.88 186.07 100.03 188.07 C 99.09 189.22 97.77 189.69 96.33 189.82 L 96.74 190.79 L 95.11 190.24 L 95.78 191.29 C 94.32 191.67 92.89 192.09 91.46 192.54 C 92.15 186.17 90.46 179.89 88.40 173.92 C 83.71 165.10 77.47 157.24 72.74 148.45 C 69.72 143.34 67.78 137.60 64.05 132.91 C 60.68 121.17 58.92 108.90 59.72 96.67 Z"," M 188.58 99.21 C 190.53 99.22 192.35 99.87 194.14 100.60 C 192.42 104.00 190.42 107.70 186.46 108.85 C 186.75 105.54 189.04 102.66 188.58 99.21 Z"," M 176.89 124.44 C 177.84 123.35 178.79 122.27 179.76 121.20 C 179.81 122.46 179.85 123.71 179.90 124.97 C 179.15 124.84 177.64 124.57 176.89 124.44 Z"," M 149.61 131.61 C 153.55 135.34 157.59 139.15 159.94 144.14 C 162.44 149.54 164.34 155.30 164.91 161.25 L 166.34 159.55 C 165.67 160.98 164.98 162.40 164.20 163.77 C 163.23 162.41 163.42 160.67 163.22 159.10 C 161.26 156.31 159.37 153.46 157.12 150.90 C 152.60 145.52 149.96 138.63 149.61 131.61 Z"],"p1":[" M 103.10 38.25 C 108.38 37.72 113.66 37.08 118.94 36.50 C 126.81 36.66 135.43 34.77 142.37 39.57 C 145.76 42.42 150.23 43.41 153.64 46.22 C 158.79 50.28 164.44 54.27 167.30 60.39 C 164.97 59.47 162.63 58.61 160.34 57.61 C 156.60 56.59 156.67 51.57 153.07 50.27 C 151.89 50.95 150.82 51.81 149.72 52.62 C 144.94 50.94 140.10 49.34 135.09 48.56 C 124.09 47.72 112.47 48.34 102.54 53.60 C 91.23 60.76 82.77 72.32 79.51 85.32 C 78.00 91.13 78.93 97.15 79.60 103.01 C 81.34 96.84 84.44 91.19 87.58 85.64 C 94.87 75.45 104.34 65.68 116.84 62.44 C 124.86 61.69 133.36 63.89 139.45 69.34 C 132.01 69.17 124.08 68.73 117.35 72.49 C 108.60 76.43 103.12 84.86 99.29 93.30 C 95.66 101.67 94.98 111.01 95.63 120.02 C 96.30 129.49 100.73 138.25 106.18 145.86 C 111.46 153.62 116.68 161.42 122.15 169.05 C 125.37 173.50 127.70 178.55 131.34 182.70 C 134.14 185.94 135.22 190.18 137.08 193.96 C 137.14 204.01 131.83 214.40 122.08 218.09 C 117.86 219.24 114.46 222.37 110.07 223.00 C 109.37 220.49 110.83 218.90 112.91 217.79 C 115.23 214.11 117.98 210.49 118.82 206.13 C 119.23 199.19 116.37 192.69 113.12 186.74 C 108.74 177.28 102.88 168.62 96.88 160.13 C 93.09 155.16 89.03 150.36 85.76 145.02 C 80.00 135.94 73.39 127.18 69.88 116.91 C 67.52 109.05 65.95 101.00 64.42 92.96 C 62.58 88.06 64.04 82.91 64.52 77.92 C 65.46 69.72 68.15 61.16 74.46 55.48 C 78.54 51.81 82.14 47.48 87.00 44.78 C 92.00 41.76 97.78 40.55 103.10 38.25 Z"," M 119.14 91.00 C 123.41 86.19 129.28 82.03 136.00 82.37 C 144.38 81.76 151.52 87.38 156.88 93.19 C 147.92 95.66 138.62 99.26 132.39 106.45 C 127.60 113.96 124.99 123.16 126.49 132.07 C 127.79 139.89 130.24 147.71 134.69 154.33 C 139.98 161.13 144.84 168.25 149.76 175.31 C 153.08 179.76 156.51 184.49 157.36 190.11 C 157.69 193.11 158.30 196.59 156.19 199.12 C 152.85 203.35 149.29 207.45 145.15 210.93 C 149.14 203.37 151.49 193.53 146.18 185.98 C 138.06 175.30 129.07 165.23 122.20 153.66 C 114.89 143.17 108.78 131.06 109.00 117.97 C 109.70 108.28 112.85 98.52 119.14 91.00 Z"," M 142.05 112.96 C 145.51 108.74 150.65 106.06 155.99 105.11 C 149.89 113.49 147.54 123.90 147.13 134.09 C 147.90 141.06 151.33 147.39 154.75 153.38 C 159.69 161.99 166.87 169.26 170.68 178.51 C 172.45 181.88 170.46 185.42 169.53 188.71 C 168.60 191.63 166.49 193.92 164.36 196.04 C 165.13 190.87 166.88 185.34 164.56 180.30 C 160.62 171.80 153.57 165.35 148.12 157.89 C 142.53 149.42 135.97 140.58 135.95 129.96 C 136.31 123.88 138.59 117.94 142.05 112.96 Z"],"pt1":[],"pto2":[]}};

export default assets