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
| ![ScreenShot](https://lh3.googleusercontent.com/2CkNIx-yzNmgweEI1_Stzocd5CwK_XrR9gOnXVCtY9FHokMdBF7oNiqf2hKPbKO1VdRTRJrCEwPukdCB2VeOQ443KPmwfbYegIiCnCTk6LNpcMYnD56dk9hml6l_tx6m0uq0MUWxMZeB61_0wzmd4iH_ZyEY7gCyeFsZfME9FsJXH3PQKoYc-emC472UUX-7bneCjUJMTn__R5PWEQ_Ccvk172ng6EqR4rNn_kqFuvTZdZEKr-A87M2_K-I-69GiKzfFUaRFCEmidGZ1DQTftl1eF8g62xEl4ElaRgYPjKc9azfWHnpRC4MY7xbKC1Up3OB3_dHAAedKQhC45TjMRGTFgyAnrHPmoDf5MP8x172tuXNmeZ2VD2dTTwywRbnK5NsRL4zToBeNBqAv86cdbMQfqtYBpUOxUqAcXPlTCqNYaRBWcFTyhjmoGs9KHaxCJaxi6xWlUmbUtL6TjUd3JLHFSWsjRBGmtNX84ST0A1QBFLhYiu3f7Q5-_8YZnP2ViB948AYY9P9ntXhAHbRLP5oJXAVc5_fCH7rvR-FwaTLfVTQ0J2o2KH6bvUboncLuskJDL5NWyIdSf5NMdqkeX1vy5asKXhqWYCXTcMChiyYld_vNchDBvyP8xVmwiStE3Zy2S2vlwYNmsi2eQ9hfbJxwd-52GCXQFYy96_pgQdmpNOHbzBagUHK8eSj0CS7O74drOaGCPXIqEeoAESCsKr0=w1464-h186-no?authuser=0) |  |
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
| ![ScreenShot](https://lh3.googleusercontent.com/_hRvVuOzhQVKmGLk3Q5ukZpwMUBoiS81zPU8bY0eo3YZl536EdXxc2yAJ5ybnq_jCtVcY4GlzXkBAilCYK541TSvvH-4UNWuNqylxxSirmB51u2ptK0jFKGGFD-_VYFW1G9YuL8SOrtALIgHy0fW8SBn7CYtgrGR3n59_MpPy4nAx7ZV0admygloSEpnkLmT8TAO8-Hr4WZBwZfxBOis87dGYvef_aruQM9XCLxHESomfEdlxoFL1op-n-iGruoLYw9RsgyFm10GuHcMtqLSr39sIn4ucjyL3vDQ-Pd8FPuzV1J1iDbNF-OZT6sF9ezBZ61BHznHjRZKHRO7JsBvWqrU5Jqn7MSLvPnAK2KdJ0Gwlc9wiqz3Y3wuOAEQlSYCeppjIULtahKkG4M16kD2iq-_fasRJ_oDH9-M6GvIwm08ovpkEE4UmmLUAXGQICpI-KMS8gLUud6F9tR4mBpUBvecm1vkZgptw57xhSmWgEnqyko0k1IzbwjhVc1AeZlEVyurh7QBISaoev-0prCThiaeqAAJKDxWpgNrUTPdqQHFEwQCQ3bMnFM66-E6PJL5mDrubTMyV4oj-_qIq1aBD2mjo3uznt5Mwx4Qf68CPXra51JuG3Dh_SEtWfdo6faH5GDsfwMx5PK0mEmTqDnf-NM6LYv975OwhC21KV_DOVrNQsntvPoW6kZD0lYbjjT5XTdo6jgByJHBTCO4CUk6xM8=w1656-h931-no?authuser=0) |  |

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
| ![ScreenShot](https://lh3.googleusercontent.com/P-iSGtlOr61CSTtICSpLEVsH4Ee-1p7T-ozh5vE81LoJUvFtwvTSvRuresrq0nNMPnicIUe7vOmbYmEA4GcxFORUe8RR5mLIyAtuMWCybaVK2npTLD5tn0AwrGs1tyCDJRhVTW5T8L8SQP10g8LM2gCBDinnaEJI8r8uqpCYH9jFMh-GzKd76ikEGC6K3i65voBj66VxvTjRoMwy2U2szOnQ-QNb44EW0d_GL5Yrb7q2XeYtom4ndG6E1xtSk20hQmoD0Agc_qNwCPLs3lapoJe4UIA87ae4hIZYUfNjsVZoIjeB74of-QI-kArO21DjerSdLFC5m6E9WZ1Ds-JjHkJP1UjRr2ICaiN_ffojrNWiSscqGry_bP07twsRFzt3de3mHUtKmsXPv9ecGRzB2OlAr7qPti8ZruasUvIVTUFDomsqgNYwijyjRDtVUU02sA158EvQ_fFPoCfsVhf7nvLXzvH6BrWzYDnJL5xwgt9t4rr_Iy1GHwqWNL50G8ocWT9FobXS2hRF6N2mJd8-k_pCFbtaN5EKcd7R-LshCcsePX5vM8oo9kKec16gwJ2nMH0YF-6uzVwhSY7ST7bcIcDXnHVhzJu-t5ZSatoIkgYuq_sNcYlCIwOtexB2An1GnSqEe0op4yvGWX48wo3f3p9NytcO42aT5mUCvzuVW2g1V-sAXuF3E4XKIUYWmzyY0NKdWB093jPByyM36Pj9rWk=w917-h516-no?authuser=0) |  |

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
| ![ScreenShot](https://lh3.googleusercontent.com/iH77fBFDmMrRm0wIAqwmqE56m24Wac22DhWBIniDNqj1UaQwlsGeBkbGOZ71Fl5oaX9i4RSdmSN2fABSKycNVOMM5dNz99ehF211UJIAaHc-APtLKKQTRwI-jwQHOeMDWfpFfrXNkk8Wf95YWDah1nU3EzeJHCl3Ap1qEe7J_qevxMMeAu2PWaUH1ZXat_-n00eTwNmRlNdHVYRDECwQjz00_XOHyLZJiq7keZnS32nKWQMPH_bWOLeBll_bOEBTt7sH4lxOi73yiV4gqlX2Adlcd9mPtG2ffwk776CyT__l_LLSE6Dsu7rtbnWDOah9LDxi01Uru1r5wiax6vDAZgrGYLSzqYGq6SYDspsIAVzB41gSuc0YJVmlWq_pdmSjh2AG4BbCb2Zu3R_r9BjR13HNoaREoGpaggnQKJFJWYaz0GoCkmFQ9n6LBgG3e_QsO_TQqLeG1n5uoUPVJDysMd8K73DwpEcv3uJn0t7MZObEfTu19zDDA51_UNuJ5u0SuZpNOqzZzQqLrB-ohmva5E8hrK5b-h7CVIzpm8VLAe7S8Csvf6SycCHawGeh8N7ovDTf4SUCTLTDuDEVSPN8NFIrZx_wGfVVdDHpsnsXXtoh3Ve8Tnd_NpgmY67kYGXJDIR1IYCyUeudRPE6QfMv8YWDtydg9oG8ZpADH5-jmv9uKqXcIoo7y4POHWorE6j-vRx6s9S3b8Y4VWvO4qhC7fQ=w917-h516-no?authuser=0) |  |

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
| ![ScreenShot](https://lh3.googleusercontent.com/KNMUjqCG3GczqB4MD29PP1nRhEX7KDjRrmNdvJ8ntGpT8ogi0j03Ko0VLsMfgKS7PV7cotAIK18mjFxF5Y6hVimia81RurPTT6ZMUnDaefZ3OJrz5GJvHAMTNt2m7CX1hSO8swAxoFjfjM_eHhATJ0MgtNla8_DovDWT9poGwJHXLz_I1LyLaS5h56vaveDGrKGYywu9dERQX0OS41XQmaHjIkOVLyuSPREnWufARYLUsn2rnU70PRAExHoSU8UiyAB3keQrjP53fC2mghTLk7n6ZSXPfHHVjHr27-PKUMMxceoOnPWrHxZQnIC3EHaIqaAwuGpvoB2pS8oDEaUeYkHEfGv9FwkkM8m3CeDB0lD_6AjI3VRddlQJ0zTMGh9wdEk3RTc1XA6lUUsZp3H8MIuZx3nOb6cYuA0lVCRD5BPrAO2pENtRl_3E8uFVUQMI0hbgh1GlHl1aMQUp1Dx0yhpK8250nd6fvMRAyjMBykuiAZQ3jd2182T0rEJOjB6y7Y9CacZnjwgWQ6vKmitoC2p5RdSaa_Y31eWsuC8nyyc0T_dHhzU9JQY8HnYmVZbS5PllwDoVYCbCPSp3_p21mxO8KZqTF_YY_QmQntE8YfIzfIY65zvoqxfVlPxm6zxG12jjq3euws8mBWgntgR_SU9yyBBY-QoZBGwKoYoGrQaZ0sZugqxDvEBf794cwnVW-Z_tJfpRUuMNsiukT1WEdFI=w917-h516-no?authuser=0) | ![ScreenShot](https://lh3.googleusercontent.com/PS-1XnaC0l1L02Q1pD-Oe-OqjQQZUX_VVDnwPBWypZFT1AaI_XNClljhKP9ceDjAuxz_y2LNu9Dnd6H_TinK54z06BKG6U2f_njAcwEaEdcCMIW90krElAYp4kBeOa5OKJ9H6CuQN0JIDeuAuLtwL0hdVf70xN3Shtc7LB0KoGUyxRpMvjH1NatWJ545MpKdMYCVkcdBuwPiMbOZ6Th3weanhlpLIkpESTxxwJMRcKZIc47elelzyjspQRh0bqiO6o64ed4Nw6mpV11pRwsk8Oqty0H2N5pcRixkhX3HQMs29_9eAtislxbRaB4bPbZGOako_mAx_IxkYgrQlkoA1NzZYlg4yu5A6fkGbkFCBOyCQnDZaBYUwxoTS8gnIj6-qc7FyejKqBYLc3YOMd-aSucXVNSg00D3DxBw9CV9pdz4rmXmXh5cTVb3We7lixkhxrHUI831sUE_a55ec8_8fyvfcNSBtKwDUEqxrXOuBva-mj1e8ieog-EUzoHLHFUjWGCBvj0uYRPRSN9X5Ah3C1sQBGqxz9j1bYvhhZwCJXmigIIdfvk1Jn5w8FsUOvcTTEEiuoibhtA6RazzKNJ4-rh0_R12HSiP5QMycVUglg10IxPloxgz1CX3VOkOWF2Qctb4bKGnleucBYJza6AeP-hMzNTDWJXgOhY6Ahe9hXxx9yiRUXqqJhof4P0sq_dplPwLTGVqjkUfpnkQghw3iv0=w917-h516-no?authuser=0) |

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
| ![ScreenShot](https://lh3.googleusercontent.com/bdYxRL0Gbynm0iui2qLJLxS9tmNAIkQpNy96MCeC3j0yaenAvTQHQzoggHK0sjZxRtHc9JKLtO2imEJEAD7u1ffVRL1SFE8DXbyDO0sk85RPE5-dRtPjKE6GsiYBLO-TFDe77H0Ncbzt2d33XqBXLyD9Lqct9hR-VEcFhm1e1h_2h2e-Zur2v7k0ZIlaKWBYUYRXDrjYIfjBAsiLavJdZwuc7SneLhhH0qQYgtJ2QastAeXz7hG3HjcjSNL9drb75MO0rqJA0y3j4iCXu1n17M1OvPrwfa_Ak3Gk8lJOlDBElEsGmm8R2iLHTRyqDxaZKWyRTLo-VbzCG7Bqei6-oUpFbOPBBKXDb8rqMavONIUzHbEyLao5EV_m-3H4trDPC2C0koNsF0M46L8obmhT0kMgGhdsBxp0zlTXotAFqKTnrkWsU2M2E9zJOh_zkmR9rtvr6maAgV9Bl5-dD4ux8KlEqJmyM3RHkTKd3SjEngWz6TPdA0tz9QwX-qax81wQjpb0LeV7YSZLiMFjmAjwctG6tVG_8MwIeVkZwSd92rhzhPq5V73naqiHltbwGPhgGRFKcwatMyq_iAN6zMP_STXUGI8YoMW1zw1fSr0xTKTrYsmXaio4xJ0d8yUxMcn2N45OAkOHjBnN_zP2UBXwNuo9ZWMaOk993yc9AomRcrtk9lxArb03bZb2hCSuWFjrSqdrR-1HQn_8Z07YIJ-Ql0k=w917-h516-no?authuser=0) |  |

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
| ![ScreenShot](https://lh3.googleusercontent.com/6_qJ2u-xJbAjhjjnATq57cxitd6fpivn2atTNydnakkiXthjVT87SpjruGEa-AEsU8Q220gmiTRYmRlhfb8YB1m_8KKZNPp-q0WxHBmr9NyikmpmHhqFUBydROhG-4F_1wk81e05nVd28GAGCEV6wpcngH5ZUOLgmjXvuWLXmkGZahURrTwDCUMf063owEVu_fPKGarhtf8iPuBenhLRdx26n8FxsgKrPXWobIdyF9u8O5eSfxY8D7VVl4_3bmN2Q2pk__pHU-X0X2U2iuTfJzXiHqS86Cws8WRXIqPMRsHWRiwQemo2bkSPJWLRLbR3nPQ-IDyFTczAVyoNLp86jQVyezXGxHHt74ASiSXJh2O3E42DSW3WeR5NilHVFH3FM5THqV7FqGXlJ33HvY7FoDAwCSbd4UZ3DN2QnPwD1GEFnUrv7ujcDdKh2ixA_OtVqTY8Wj3gK1GNS95s8LojqmHB_zi3zK97dR3xMy8okORFb8aKleWK1bo_Lq_ZuS33NFyKDpyz91uGDctR0LIVwrdrQanGQ8-wdZxsrNLp698Go7U7N2S0KeVNT8HBafoVH2Dnf91_jAlwvkGQ3mUNCKF0Yn1z5CC-RBviPa6D9o2QDn8K9F8pYUDAx19lS4gG1q7uoCQ7bAbpVbA4iQ6oU6y1ta5kIw8NFfkqEhZQhw8t-4tc9sCB4ko754OeamEnCOsTy639_EhBMiQTxMsqMT0=w917-h516-no?authuser=0) |  |

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
| ![ScreenShot](https://lh3.googleusercontent.com/vX3Vu6UDYSPpCpzSGVevg-_9N3OfHc0PZlUZxIzQgyldEs7IouS38vPHkqyEw30YW-20AaLuv1riGbPO67Ck0IuCL1bpTUDx-GX1VL3wOMJp3d9x-MsuLV3gCYi6X64yKZ7axTUOpIsgFzbHpKRV-pKhCueeFMgVLwD8PqT6LfG08NhfErIcIN6N6BeCr7uuaHfyqKucp5D3L-NDDgmV6-mkPLDzsdv2ijX7A_kj32gj6mKCmZawEMYDF36st5cYRjv2elboL8A_W_5m1FD7ptmEaILzX7wa4IKExZS4fWWgLBITponheeJEfLUGkLRHnxTcV260kHpo9HsQ3ESUdlMoA5g3XqsGdvXJ9IHMV2Dkr8F0o-8AX3QO_tSZ_l40o_jwwkXuJ0RMeyFRNzoZdTQQ1FWagyfkmFizeJNH_WNTqY1zVIKyefuekfi4zb8RiwnH7cjntAf0qlhTzbkZ8w-wgnCVLVldIjV8lWmX7pEsE-2zrz9H5qI1UbTVpO8oj189MtKsrr4H3hRa3PQaxrkj3FFEvmIHZfIb3fjydXZS-RZbbBgzDhWTe2DsKNy_17xohDU2Z5Bq9kGABoBZ-Jb0xOtUWyDzCGK74oXVYm4BVbVRPlehzRTJLrxJnEQalZiffbz2vgwgT2TrLapfvB0rxIMpq5lh6seTIpxqZY3OtfsoaN-nhyiJAK74OUNlKWC_8dQT9Zs_YzLGtWjy79o=w917-h516-no?authuser=0) |  |

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
| ![ScreenShot](https://lh3.googleusercontent.com/AmuhdB-PwmIXCnrbkpOAT9a4AHFsy5gt0RNxoEImpBOp-i0tAA-FjSvgg2_dMPsZ-eaG_qMeupkJT41aYKOnbJtx6MDO0lCGuMiTVfVZv0J_LBQJVogJzBKnHN5CXH6O_OWwv_6kE5-yUjQ7mHYaScDxxwI6tIdqXYiH6gk8nu1eGoQGyd8DbU_4hVu7MtENVf__HhjPY5v4Zw3LGuVWD986PDLIKXCSI0jEeD9fiaLZaxOdRZzBrynxpswWQp9n-QZp3cCvY8WT8l5YtNK7j4kYWbxxdHuZ3RHgl5JTk5O0Smdlpnyh2UzbJlh80sNuv4sje7XR8L15yRyYd8EiyjivMLJGeivz7Lg16KLqRTmqRmukXfPL8mMZsO4xlumnKz8ek0A_-AqsMm1FCagJcncFwKh-4jqzHT-2_zr__5yJZFZR1N-XmRiGAcRvRVVvkh4B6i9K67fz1zy6c4cFO-G_dW78VXdwt2eiHasNWRaMfcCl9nsl7uvfpsYbHYo_G0FIvtC0XOgXEiaudduifmG0SQKFqAeShqUSS9xV2h7xSrCznQtuSJsmwq45G5KQKFrTdZvGVpxZqZEMra2hz314a729HWGVwn65sC-ARFBlB3A_AQx3RJkiR_SUzg6sFQZflnwuDyzOjiPpzwzlWBDEi6FqrsKoVLhs5VevOnrS_-PO30tyIL5J1FYkVHHSuGb3Yr4ImTjxZgxa28q8D3A=w917-h516-no?authuser=0) |  |

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
| ![ScreenShot](https://lh3.googleusercontent.com/r1COr9yF3ISZ1EgU4URXYknD1dRW79GLeZict9C1R-8vuBxCeQD1dDHpA9tGpXuMlWQmTgoeN5pUMEvXd1BTrkvwjKTbCntXq9V8mqjQrno3TIGg9OCKxkLm3ns12GxKZhv2-P5_phOUYu_lbhYtsRAszR-aIrMhxYXsbsCyPLA6hqqVtTOIuvENgfGvNlgKxHeheuWde8p4-ZgR5l86QHKkZHVd7vg6_D2zsFZAomOtJAO44kTFZpjknR1Qs8wKPd2qSJNsOtGFBMGNBE3x2k720Kar0iUyKZYQQ8R1wS557GPcd4rZys5Wj1lihUWe_mgObkwZQsIVkOO5l3PDqbHLJOPDtnsH3E_bVTTB7mn7KVHge_nAflLLCIzIL1Ie7AOliIHYw10MM0B4s3gTAygOPZrdvQm9bYGq27XcGv2Iy80noFPGTlGrmDRF47v629oFDJj_6-uOdmIJl9HCS171fAbONJZxfcBREV-X0ylb8182uYi9mP-UGYXu1OTIjGwQzT9k2QkBZ74JRYGfgy2VWsZt7WVdI5H5GdrK-84in_DQ2clo6TRaa3csxfcna0XlTstUyU-HQseAyPZwD97dvru9Y928T5z0cbLYPKS56N6gYG_Lr49nazUPYa70TUKFNpsPf3Q9fVA4LtEHFWVg_cxNTopPbjfmsg5ZAmGSDfSK1P01TH3OSssqRInN6gzCIZQLPDPHYq4vnIp1VmA=w917-h516-no?authuser=0) |  |

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
| ![ScreenShot](https://lh3.googleusercontent.com/BQJCEp36AHyL_MQo9HSPOSln4fhmEN5iYtXkBiOvByl5fLMiFhiGJmZ80Rao75B2_ASFKNECEW8Bqbv4qd5fL5IefQ__rn5j6SCZplB9M5fARWFtDOae9ytgX5MJ7Pvl8vGi6z4V_S6fJRxhPQ7VpOHVu5JF7yRC0C43ZaYGhWtz75BiHHXZSVAJzNrHDb_YeMcuax9b-TcLiI_6hzNHTPk7PYbJBDN0uxUmgzR2dolMPhlQlOb_kJC1ehlUkc86eOYKDDkzdjrcG3XXAyDENbaPSjRAS2kvT19hp5NuQVXkhnFCBODtQLqXsfZVHnOlGZu0dlQfscIUQGZnVVABWg_0uxawIhBb1UjYufBtKfj-QWmqwD-tRw2RG-MrEc3LOOOhJy9C_CyO3MPy6jwSpd_-kxNed3HXu2u2ykSFjMXK-cjegLRMjI0UL10FkafQyZiiVwVr9c7F8T3YGxvsB_OMSGkCWl2Qor5H07Jd7OkL_p-L3MLhnQ_B7M9s4IR0vkzW78bew0hFFMPx6m9MnKopWuQfYDip6I6z85BdJJlJJHyKY6qZ3URgrh22D2qmDITCU_fUfyZc6c-6IUz5E6UZOvmtUTr79wjTycTfjrBQSwLWmtoR9Dc7EJzmRmKveB6ZlCwJp1kqo2NoUzfI2Q_ZZrxT0UHwu7ebpJ7N7GwDkumUKluTugffdQREre8bmI_QtTRpzWhv6W7FWy-YBvA=w917-h516-no?authuser=0) |  |



