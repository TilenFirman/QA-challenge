<h1>QA Fractional.art Test</h1>

<b>Automatic tests with Cypress</b>

On the initial repository pull run `npm install`. To run the tests execute the following command `npm run test`.<br /><br />
<h3>Fractional Art bug report</h3>
TEST ENVIRONMENT<br />
OS: Windows 11 21H2 - Build 22000.318<br />
BROWSERS:<br />
Edge 95.0.1020.44 (64-bitna različica)<br />
Firefox 94.0.1 (64-bit)<br />
Version 95.0.4638.69 (Official Build) (64-bit)<br />
<br />

ANTIVIRUS & FIREWALL : OFF<br />
METAMASK VERSION : 10.5.1<br />
INFINITY WALLET VERSION : 1.0.82-BETA<br />
BUG CATEGORY : LOW / MEDIUM / HIGH / CRITICAL<br />
<br />
1# BUG<br />
| QUALITY ASSURANCE  | BUG REPORT |
| ------------- | ------------- |
| SEVERITY  | LOW |
| TITLE  |  QA TEST LINK MISSDIRECTION  |
| ACTION |    |
| User Clicks on Ropsten |  |
| User Clicks on Rinkeby |  |
| RESULT: | EXPECTED RESULT: |
| Ropsten redirects to Rinkeby | User click Should link to Ropsten  |
| Rinkeby redirects to Ropsten | User click Should link to Rinkeby  |
| SCREENSHOT |   |
| ![ScreenShot](https://i.ibb.co/gMXVXmc/image6.png) |  |
<br />
2# BUG<br />

| QUALITY ASSURANCE  | BUG REPORT |
| ------------- | ------------- |
| SEVERITY  | HIGH |
| TITLE  |   User Fractions not shown.  |
| ACTION |    |
| User goes to https://qa.fractional.art/account/fractions ( Account / Fractions ) |  |
| RESULT: | EXPECTED RESULT: |
| User click on Fractions creates  Infinite Skeleton loaders ( as visible in Console. ) | User Click should Shows Fractions.  |
| ERROR :
inpage.js:1 MetaMask - RPC Error: execution reverted {code: -32000, message: 'execution reverted'}code: -32000message: "execution reverted"[[Prototype]]: Object
 |   |
| SCREENSHOT |   |
| ![ScreenShot](https://i.ibb.co/gRZb3By/image7.png) |  |

<br />
3# BUG<br />

| QUALITY ASSURANCE  | BUG REPORT |
| ------------- | ------------- |
| SEVERITY  | CRITICAL |
| TITLE  |   User Fractions not shown.  |
| ACTION |    |
| User navigates to My Profile -> Fractions. User see empty page but can click on blank area and is redirected to https://qa.fractional.art/vaults/null . Once there user sees form for exchange with no details. |  |
| RESULT: | EXPECTED RESULT: |
| The buyout form has no content.  | Content should be provided.  |
| The links beneath the buyout form are not clickable. | Links should redirect to Etherscan and Opensea.  |
| Bids can be placed with more currency than owned in the wallet.  | Max amount of bid should be equal to wallet stance. |
| Bids can be placed repeatedly without a change in my wallet’s balance.  | Trade With MAX ETH should deplete my Wallet. Wallet registered no change.  |
| Settings & actions have no dropdown content.  | Settings & Actions should give user options what to do with specific NFT.  |
| Button Buyout doesn’t work.  | Should finalize the Buyout.  |
| SCREENSHOT |   |
| ![ScreenShot](https://i.ibb.co/Bq21JfZ/image5.png) |  |

<br />
4# BUG<br />

| QUALITY ASSURANCE  | BUG REPORT |
| ------------- | ------------- |
| SEVERITY  | LOW |
| TITLE  |   Hyperlink not linking to correct path |
| ACTION |    |
| User navigates on https://qa.fractional.art/ to part Backed by World-Class Investors and clicks on “Many More” |  |
| RESULT: | EXPECTED RESULT: |
| Opens new window in browser. Returns to /# | Shows the other relevant partners. |
| SCREENSHOT |   |
| ![ScreenShot](https://i.ibb.co/FHjcCvj/image11.png) |  |

<br />
5# BUG<br />

| QUALITY ASSURANCE  | BUG REPORT |
| ------------- | ------------- |
| SEVERITY  | MEDIUM |
| TITLE  |   Error On Validation|
| ACTION |    |
| User fills out his account details on https://qa.fractional.art/account/edit - When trying to Update the changes only then error becomes visible. |  |
| RESULT: | EXPECTED RESULT: |
| Validation does not remind user instantly that the input is incorrect. It happens once when user try’s to update the profile. | Validation form showing the errors of incorrect user input on the go. |
| SCREENSHOT |   |
| ![ScreenShot](https://i.ibb.co/nsYcm8t/image1.png) | ![ScreenShot](https://i.ibb.co/F56m7gY/image4.png) |

<br />
6# BUG<br />

| QUALITY ASSURANCE  | BUG REPORT |
| ------------- | ------------- |
| SEVERITY  | CRITICAL |
| TITLE  |   Profile updating failed  |
| ACTION |    |
| User try’s to Update his profile. ( Wallet Connected MetaMask ) |  |
| RESULT: | EXPECTED RESULT: |
| Critical error. In NETWORK we can see UNAUTHORIZED. (Singing with Metamask) | Profile updates & changes saved. |
| ERROR : chunk-vendors.a5ce4bb9.js:61 PUT https://rinkeby-api.fractional.art/users/0x12bc76175685269fa75c8d586d10e9130d68deec 401
 |   |
| SCREENSHOT |   |
| ![ScreenShot](https://i.ibb.co/jzFSjsx/image8.png) |  |

<br />
7# BUG<br />

| QUALITY ASSURANCE  | BUG REPORT |
| ------------- | ------------- |
| SEVERITY  | HIGH |
| TITLE  |   Update profile failed. (InfinityWallet Connected) |
| ACTION |    |
| User try’s to Update his profile. ( Wallet Connected: Infinity Wallet ) |  |
| RESULT: | EXPECTED RESULT: |
| User Clicks on Update profile.
No activity. Console / Network log are idle. | Profile updates & changes saved. |
| ERROR : chunk-vendors.a5ce4bb9.js:61 PUT https://rinkeby-api.fractional.art/users/0x12bc76175685269fa75c8d586d10e9130d68deec 401
 |   |
| SCREENSHOT |   |
| ![ScreenShot](https://i.ibb.co/6N6hBDz/image9.png) |  |

<br />
8# BUG<br />

| QUALITY ASSURANCE  | BUG REPORT |
| ------------- | ------------- |
| SEVERITY  | HIGH ( Because it can impact the revenue. ) |
| TITLE  |   Filters not working. |
| ACTION |    |
| User tries to filter by Verified https://qa.fractional.art/explore - Filtering not working correctly.|  |
| RESULT: | EXPECTED RESULT: |
| Filter not filtering correctly. | Verified users should be shown only (or first) |
| ERROR: Verified & Not Verified are mixed. |   |
| SCREENSHOT |   |
| ![ScreenShot](https://i.ibb.co/mShmXkF/image2.png) |  |

<br />
9# BUG<br />

| QUALITY ASSURANCE  | BUG REPORT |
| ------------- | ------------- |
| SEVERITY  | CRITICAL |
| TITLE  |   BUY Not working |
| ACTION |    |
| User Try’s to Swap assets |  |
| RESULT: | EXPECTED RESULT: |
| Trade not possible due to incorrect wallet stance on BUY page.( Have 0.8986 shows 0 - Metamask ) | Exchanges token X for Z.|
| ERROR: Insufficient Asset Liquidity. |   |
| SCREENSHOT |   |
| ![ScreenShot](https://i.ibb.co/2cvtrFd/image10.png) |  |

<br />
10# BUG<br />

| QUALITY ASSURANCE  | BUG REPORT |
| ------------- | ------------- |
| SEVERITY  | MEDIUM|
| TITLE  |   Active bids not visible |
| ACTION |    |
| User wants to see his Active Bids on Auctions in his profile https://qa.fractional.art/account/active-bids - Page is blank.  |  |
| RESULT: | EXPECTED RESULT: |
| Not showing any result.  | Should show all Active Bids by user. |
| SCREENSHOT |   |
| ![ScreenShot](https://i.ibb.co/CzLsprb/image12.png) |  |

<br />
11# BUG<br />

| QUALITY ASSURANCE  | BUG REPORT |
| ------------- | ------------- |
| SEVERITY  | CRITICAL|
| TITLE  |   FRACTIONS BUY ERROR INCORRECT BALANCE |
| ACTION |    |
| Users wants to buy NFT. While Buyout is possible with MAX buying Fractions is not because for some reason it shows that users balance is 0 ETH. https://qa.fractional.art/vaults/0xbF241188224A765cCc453339aa1484c64B79B2bf  |  |
| RESULT: | EXPECTED RESULT: |
| Insufficient asset liquidity. | Buys a piece of available NFT. |
| ERROR : User cannot buy NFT per Fraction. Even if they have money in wallet the amount owned is shown as 0ETH. | |
| SCREENSHOT |   |
| ![ScreenShot](https://i.ibb.co/84LpsxJ/image3.png) |  |



