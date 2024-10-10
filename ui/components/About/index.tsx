"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFRUVFRUXFhgXFRUWFRUVFRUXGBcWFRcYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANQA7gMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAEQQAAEEAAMEBwUFBAkEAwAAAAEAAgMRBAUhEjFBUQYTFCJSYXFCgZGSoTKxwdHhI2Jy8AcVM1OCk8LS8UNjorIXRFT/xAAaAQACAwEBAAAAAAAAAAAAAAAAAgEDBAUG/8QALhEAAgIBAwQCAQMEAgMAAAAAAAECEQMEEiETMUFRImEFFEJSI3GBoTKxM0PB/9oADAMBAAIRAxEAPwDzvssfgb8oXT6cfRIdkj8DflCOnH0Adlj8DflCOnH0Adlj8DflCnpx9EC9kj8DflCOnH0Adlj8DflCOnH0TQdlj8DflCOnH0FB2WPwN+UI6cfQUHZY/A35Qjpx9BQdlj8DflCOnH0FB2WPwN+UKenH0iROyx+BvyhTsj6QB2WPwN+UI2R9IA7LH4G/KEbI+kAowsfgb8oR04+kQL2SPwN+UKOnH0gDskfgb8oRsj6QWHZI/A35Qp2R9ILDskfgb8oR04+kAdkj/u2/KEdOPpAJ2SPwN+UKOnH0gDssfgb8oUdOPoKDssfgb8oR04+goOyx+BvyhHTj6Cg7LH4G/KEdOPoKDssf92z5Qjpx9EB2WPwN+UI6cfRNB2SPwN+UI6cfQUHZY/A35Qjpx9BQdkj8DflCOnH0FDtp6ALRQBaKAFJIIAEAFIAEAKgApBFhSAsKQFhSAsKQFioAEECoAQoAAgBSpARQSIgLBAWLSAsSkBYIAKQSFIAKQAqAEpAAggKQFhSAsVAWCAsEBYICwQQCACkAPwYN7xbRoOKoy6nHj4b5IsmRZUTvWGf5H+KF3Mbnyt+9vwSx17/cG4ZwWHdI4sA7wBNHjXJXy1cYpPug2t9josAsGw4b27JJriTQ0CJ6uknFWiIwk3yzjZB3Uf14qta5+UWdKXiQ0avZGpHIq9ayO22LU7oRzVZDVY5DU13RzS0JpgnYJqAEUAAIoDqlICUoAEUAbKiibEpTQWFKAsEBYICwQQFKaAKRQC0igCkUAUpAUBRQBSAO2QkqaK5ZFEkMgCNplnnZbZDhT1l6hoBJ5O4AfFcv8k4RhX7mW4ZyfL7F66AAblxkPJ+iK5ikVNlXjMEx5stNjcQSCPeE8ZSXYffRXysDHlxcdWlurrJsVvPkrd7caosi75KySXZJJp90Bd7h4XDluV8E5cckul2HnMGy2RullwqwSCOFjy11U9TnZNWQotcxGWTFuh1BO/l6qMmGluiNDJ4Y8WcUYdU48SJlj9HMgoWunDPuVoqtp0xuOQFXQmpIc7CsAVBAiCQKABBAoQSclQAAIoBaUgIgBUACCBUACCQQAIBskRQcSpoy5M/hEljE6iY5ZB6OEmg0Ek8FGTJHHG5MjGnORr44NmNjfC0A+vH62vJ5HvyOftnRcqSihl40Sf2EsYlZuQkT2IOKNBNtITMhmTT1luBrhe5btPRd3XBLwzeu2Yy7utaT6AcArs2zHHelyRG33DGYqRrerLWvaD3SR32jkHDh62si2z+mWqVEE94G71571txpbaKpPmxyCYnunf8AesWTC48ovjOxTIbK04IuMOCnLK3ycOjs2LB5/mrsan3fcXdXY7Y7nvWvFlv4vuWJ2dK8AQAUgKCkACAEKCRUAAQAUgBaQAUgApABSAFpAEmCHinjExZ83hEpsaejE5D+HgJIAG/giUlGNshJydGpwGWiIXvcd5/ALzer1Lzy+kdGEFjRJe2xZWFvwMkR5AeSgkZlBO/cmSFZW4wjjWidNC0V+Jw4cDxB+5TupjwbTIWBwIjcXbzub5A/jWisy5nOKiXxa7j02GveqFIEipxEdFa8Gbb37BKNo4LQVvpSRRbidRxAKVGuBW7O6pN2Fsbk58OPokm2laHhy6BpV2DOpqvJoprudUtJIUpAKQAEIAQhBAlIA6CAFQAoQSFIAEAFIIH8PFxTRRlz5f2kyNisMEpWSGMTCl50cw1uLyNGj4En8lyfyWSoqKN2mhXJfui/nguI2XvkSQVoFWyUR5Wj3qAaIGJ3eqdCspsbFYcKuwRR3FRF1JFsUiFhMS9jxHLGHNIGrN7QdAdKFA8K4LdKOCcHKPDCmmO4jQ6cNxCxrkHSZFnl0KlRJUuSmxUzg47qO7RbMWOMkO20ELtL0315q7HNxntfYryJONjxK1MznJdaiwoL5qGAy8FuoOg4eSpeJRe6Pcvjlb4Y+02t2DKskb8+Sx8C0rwCkAIgAQAIAWkChSAFQFhSAsKQFncUdlCViZJ7UWUUKtObJjwiUlbJkEaVseES8yF7W20kDac0NBIFuN6DzXH/ACXeJvwr4ui4eKG5cgcjbJtKwCWPRIh2/BAkjtWeCuhg4W0oy4IGJg1NKUM2V2ZFsbbPEgD1PmrMcXJ0iKbKLE4vb2Q29N9br9eS2YMDb+SJk1FcHBjLhROg9L+K1LArtCPJwOMYAtCSRU2weoYIRrEbQbEcErRAhCAsbhBsgcFneXo5E/Hk14/kh9dRO1ZAJgEQAIJBAC0gUWkALSACkAFIAn4ODTzTJUYs87ZZwRJ7MzHnR6qAoejZolbLIoaxjS04d9aDEs/9XFc/VK5pfTNmDszaYpne09R71w6LHwRmv1pS0KjqaqSNWOkV0zSD5ISslxpHJk+imiu+SqxOIYCbcBTdo6+zdX8UtMdKzL5qTPJobjFEb99a711dFpZ1bVEZcsY8ISODZC6kcVIxyy2KY1DgCkNPCrkkixM52UtDWKdEPgO5wUrAQqAOnRlhDiCAfu5rNmgskbRfibg6YBwJNc1q0c7jsfdFku9iraIFIASkAFIA6pBItIAEACAO4mWQEIScqRdYaNOc98ssoIlDYJD7oRqosmjpkeiUZDc8G0wj2hJG9nq12v8A4kqnLj3SjJeC3FKrs1kdvhY/iRR/wmvwXA1EenmkjTVxTKjFyCMFzjQaLJ5Uq18uERHhmUxOYzYjvWWRA2xo3uHN/wCS6um/HxauYmTO48RJP9czNYGbW0A4O717VcW3yKuyfi8T5jwJHVyumWDM0hnJaGmJ3AOI2XHjRG4rn5dFkxq+6LVOEjHZ5ZxGwbAAFj0Jq1Zo4KXL9jZPjHgdpd6q4ObdnWyKU0qFt2Nuaq3GyyMqGurVWzyW7/ByWpWmMmjlzUrRKZy1uqhRsGNYsEN0VeWPxHxv5WXMcwng2faru8gQuTCbxzOtlgssCkwu7XQ2bWvHl2519mNL4kldkQKQAUgApAC0ggKQAtIIFpAEnAMsqYlGeXFF3BGpZlRZwRWkbGJkGGvglboZKx9+FS7hto0cH/PNTuDa0abLItqDZG9pJpcHXY2srl7NmJ/CjL9N4x2aTaaSGgEgGjW0N3nxWXE25Khq5M1hm3Ezj3RR3aVpfI0vVYr2KzBl5kxqWtyuTRnaojOYLBvzA51wUTipKiYyaEzEmaaSd1W82APZHALNptIsS5fJfl1Dn4OOr4rXRms4dooYy5H8HgZJb6thdQs1uA8yq55ceJXJ0PDHPI6irGpYy00RRG9NGUZq4uxXGUXUlRHc1VuJapHFKurHOCkfAy5OJ3d0pZPgIqmW+Fk2sKNig5gDh+9snvD4En3LhyXydndUvgqIOYQ69Y0U1+p8ncU252vozyhTGWbl6GD3RTMb4Z1sqwgSkEhSAO0CggAQAIAn5axMjLnfJeYQKGVouMPGFXYyLPCwWFTORohAn4fCgnXcN6w6jUOHxXc24MCk7Zn+lGegTxQx19qjW+vNV6Gbc2/H/wBLNbjSgk+5bRSOidtjlqOa3ZMcckdrOdbgxjOHwzRuY47IkBbuJqxvvkuNk0uXHK64NEZwZU4Ho06MMYZA5rQATs0SOFa8lY/yWXZtSpi9GN2yh6QyMdiOriaA2Og4gUdocL47lf8AjMeWc+pJuhNVOMYbUuSJNK4NDe6QCSLa079+pFrs5dPHI7d39MwwzSjx4FZDFL7Rhk8zcTvcdWn3rBn/AFOne6Hyj68mjH0siqXDLvLujgkwvWmQGTXutNgDgb42q5/lZ/tj/ezXi/GRkvk+/YyszqcWneDRW/Bqo5laMWbTSwtpmo6H44MEjOD9456aLmflt3Ujfajpfiq6cq72ZnP8YetLtnZF0QfLiq9Dnlje3wWa7DHJ8vI2CCLXftNWcKnF0cmlW2h1fkbeFXJFiY0/cqW+CV3J3RpxILavZdfuXI1C2zOzpnuhRJngID460ovZ6A39NQqb8jyXBVw7l6HSu8UTnT7na0CAgAQAIAWkAFIAVrCTQFk7gq8uRY4uUh4Qc5UiflLrGu+yPgVODJ1MakY9VDZkcTT4DAlzC8bh+VqjU6uOGSjLyXabSSzRbj4LDBkHjattNWiimnTL3Bs3DisWfJsVs3YIbuEM9LczbhYCR9o6D1K5E3Kcq8s6cKhG32Rkeg+SvlecZLrr3b4nmuvjjHFHajmyk8st7N02C9XaDis+bUbfjEvxYN3LMv0oz2JkjI4wLutK3f8AKXR5JPJ34J1mKEcfbkmYPN2xgNkBq9DxaDwA4jyVmr0fU+WKv7GDHk28SK9vRFk8r5opyIngvOl94cjw9CqNNqsmCLhXb2aXpo5vk2ZfMYRFKYy4Gt3mCu1pdUs8b7M52q0ssEq8DJAK1mRNlrkuaGEFt0N3xXn/AMng2ZOouz/7PQ/jM6nj6b7r/oz+fM722zUgmzxN6rLp8mySZfqcSnE7wGKOjmmjouvq4rPp78rk5Okm8Gorw+BM5w7iS9xu615hcLFP0dzNj45IOBdvaeG70XoNNk3Ro4GohtdkorR44M42WquS9jqXoZlNAqmXCHXJpGTNjw21G0bbWMeNPtAH9oPgSfcuLL5Tdnej8capHcUwkLZK0FH/AAP0cPTUKtccA3aKPEYYxvfGfZcR7uH0Xe0L/oo5uVVIbWwrAoARAHaABAAgCRl8hbK0j973aVa535N/0a+zZov/ACHWUTAl3k533rRoHeFI535Bf1mz0XKYC3DWdNvUei5H5Gankr0db8bBxgm/JkcsxpbjpI77rnbvOlu0U30kmYdbBdZtHpOCYQNpYdbO516NmkilGzzrpE+TG41mHB02tn8yo0UU25vwNrZVFQXk9SwuDZHG2Jv2WAD3jkmnnb4RXjxV3KvMHumf1URqvtu4NH5rDJ7nRvglFWytxWXYYTxBkTS9jr2q1OneJ8X5qxTa+MewjgpfOXcov6Qc3p9tAFeVcgtGlyOOZNFOpxJ4Ps0GVnq8IwkUXMBOtEF3eP3qrPl3TlIbT49sFE8szrFNfi2C6btAOPGi7X6K7TSlCDku5Tqts8ii+xt+kOXQjDiSIAVVDifI+aXHrMsJqdj5NFilHZVGN7YL1BFb+S6uTPi1ONw7P7OVjxZNPlUi6liY6LaaBq3WufNec5jKmekVSjaMqHdXIRwP0K7eiz/tZxNbg53It8diNqAXwtcyUNmVxOlHJ1MKkZ6N5Gy/zLT94/nyXQ086ZzdRC0WYeunu8nM2llkWX9c/X7LdT5ngFg1uq6caj3Z0NDperK5dkddLZYmQfZG06TZZWlNYLefiWhYdJKXLbN2uUFUYqiP0dm24gb/ALMkEeXL4aJc6qdk6eVwon5Q3q3uhJ0BoHnG/d/Pkqn7LF2oj5v3nbdagljvVui6v4/IqcP8mLUx7SK6l1DLYlIJBAHVIIBAAgBzDMNuI4NP1XI/KSXxidHQLuyP0fBLnNPtPHwLqKiGWtNNLvwZ5Y92qjfZtnszGbULa3bIHw0/BcqXKOnF0zzl+FEeZ7PiII42XfqutoprpW/By9ZH+q0vJ6nMOri03gfVc7LLc2zfijSSMh0X6NTDFvxEw2Q0dz94u1J8qVkMiji2ruyvJDfl3PsuxrXl73bDdAN54D9Vn5k6Ro4irZWdI81iwUVDfy4uJ4lMoW9sRd1JzmZ7oPinSddiZN7nbDfJoFkD3n6J88VjqCFwyeVObM50xn67ERxN1t7R6kuA/FPpP3SYurfEYI2HSNr2QkAjZDd/HRY33NUaPI4A58waKO08DUXqSupHGtl/Ryskm5tHoOeRmE7GzYcAW+X6rmVydeL+KXkzMuHez9r8RzVikn8TLmwtrcu5Pw+LAbtN+yd45FJKLsXTZu8GZfN3kuOla2FrwuuRM9vgn5NN1kbozvGoS6nian7H0rTg4EbspIkZxrbHqzfXutPjnymVZcfDDCS2xdWDuJypxqRo+jWL2IJSN9n8lxdY28p3NClHCZvP8UZGwgj7HWNJ5kv2vxC0YO1GXU8zsMon2C9o9oD6f8ptRHhC6adNovo32GSDQxjZd5tJ0PutY/o1lq2Fsm1f/UGv8Q4qzFkeOSkhZw3KjPzRFri07waXo4yUopo5bVOmcUmAEALSBbCkBYIIJeENRyHyXB/Ju8qX0djQKsbZSwvqRg4G7+awqHJ7GMkuqj3Po+wHCx+bb+Kpj2Hk6kyO7o/F2pmK9tjS2uB5OPmLPxTrI4x2lcoRlLd5L/YB3qAG5zwG8oYL2VebZo3DsKS64Rao3yed4TCS5riHPcS2Bh7x8uQ8z9Ftilhjb7sxybzSpf8AFGwwkMLC6CGMNjY2zxJcTv8AU6rHklvdmyMNipGRyjA9fmo07sNvPu0b9a+Ctxy24H9lWVbsyXpGi6cTVC70WfvKi9f8Wzz7oVlT5pjIKqKnHm48AF0s+RQhtXdo52CDnO/s0nSbNg+MmqLOB3g/kuZFW6OnJ7VZRw40Stu65+qZwcXREcqyK0VDceIpK4E6q/ZuiYclKdokY2Nrxtjiki2nRqmlJWQ8ibU3qCrM3MSrAqmT5iI5A/kdfQ6EKvGx8qKl46t72cLseh1H0XTxTuJyssKlRdZX/YOK5uZ3M6+nVY6KXNzTIm89t59S7Z/0LTi7GHO/kROsIc0q3LyinE+TQ5biSB6ij6FY2b0zS5KDs3w1SDDOfYSx1g4aO9OBXT/H5/8A1v8AwY9Tj/cijpdYxWIgLFQQFIAXZQRYQOLg5g4nVee1/wD5m2dvR10kkJhMvDJWOPmCPxWV5LjRcsdSs9a6NYsGPYB+z9xSxfAuRcl01OVg51IJFee7fFBCMXm+Wy46Xqg4siaf2j/9LeZ+5GGSUtz/AME5ovZtT7idIc3w+XwNggFGqA4kn2nHiU/OWdEKsULJGRQdVhrebkkt7z5ncPcNFRKl2LlcnbKzok4CbFyDi5jb8qca+qeTqEf8iJXkkyD08zA7IaPaBKjFG5IbJLbBlX0IZK0SyR+w1tjmeOnOlbqX8uDNo/N9hjpBK2caHvnfwCqx2nbNeZKSpFVleEJ22nQ0tE2pK0ctTlhlT7EHGYLZs6k+e9EZ2aJQrkm5W+49l28HRV5OHaLsLuNMbb3JLCbvEXtI5xs5O9EIhOVoZzCpGMe37QbTvduV0ZbeDNOO7kk4DFVCW8SqJR+RpxyqBX5q4kxX/dCvnetWJcGPL3K/ESajyTyd8FcODQ5ZJYCyT7m2LtGjyrE7JAO4qssLsU62nUEfRTGTjJSREkpKmZbHYUxvLTu4HmF6LDlWWCkjk5IOEqZGVwh3SCApABSCBYnbDw73Fcz8lg3w3rwb9Dl2y2vyPZuHU17eBr4riY67M60/aNV0Ckf1uuoLDfqCK/FNwVzPQ2hMVMbdqgBWNvegLM50pzduHiLW6HWq+pS/SLI+2eP42WSaQPeSbcAL81qwJKVGbO3JWep5yXMjOvs19Fhfc2x7ELoNDcErz7czq9GAN++1bl7JfRTD/k39mS6dy/tCL3UPxVmlVyF1bqJqOhUBjwQkGhkJcfQaD7lXqOJ0Glj8DIZ5OyOZ2yNCfgVMI7kPkmoMrMVmdOaWGiCrY4yjJNSJcmPbP3iAH+1yPmq9jiy5TjNEWtk6JrsTszlwNqfBD7jWI1TRFkMQvo+SdlfYsJMCSRsD7WnvS2NRWZ3N+02AbEbQwHnRJJ+JKvjwjPkdsrdkoFLfJ5NK5KrIjRiZo8O+1nZeW+FxJ0tQMkScbAJmafaGrfyWrR5+lPns+5RqMe+P2Zohegs5R3SCLClNEAoAC29FDSapkp07Q9g3bTXxHfWn4LzGqw9HLR39Pl6uOz0PoDlLo4useKL9w5N5+9IkE34NU5MVjNoJKzOMzbE0knXkkk/A0UeXZhjnYzEiIcT3vIckyjtW5g5bnSJr8m2sTDGwaNe1zv4W6n7vqox5KbY2THaRe9LpyGVzVXksj2LDKcKcPhGMOhDS538Trc76lPN2JBUee47Bvxk2y2+8/fyCsxzcOULlxrIqPQMc1uHgbE3RsbA0e4KmcnJlmNJI8mzqfblPqteJVEwaqVyG5svLQDzCbcU4p7nQ3DA5qhyTNMYtE0RnQlV2i2mcvQiGjh7VJBE2e8FYuxVJcm0w4EOFfOd7WHZ9ToPqUi5Y7dKzznfvWkxpEvCYYuIAFk7kkpUXQjZomZeGN2KG1dk+a6GPSqeFX37md5tuTjsdxHZ3rmZcM8bqSNuPJGa4ZeZfRWZmiBZdSWEO4JbGaIWeZUdoSRiw7eBwPNdvR6tOO2fg5WfTvdcSmpdKzEFIsgWkAFIA0vQrIDNL1zx+zbp/EeQ8lxPyVSyr+x1dE9uP/J6W1tacFhL7EkUElHneZtgYSSobGSs8u6R9IHPNXqfoFowYdzt9inNm2qkXPQLJw2PtDtXPuvIKvPK5tFunjUEzY4HCtZtOrvO3ny5LN2L27I78K2SVpIsN196gnwJ0qkIgLW73kNHvOv0TshIY6O4BseoGtVaWwaorOm2L2W7I3nRTBWwbqJ5gNZK810EqhZyc3/JmimZtNocN3qFQmZFJxdobhiaRtDXnetFUu06O5jcZxUkcTMvcpQ7Qy+LRMmK0NOYpsWiO+OiD5p4srlEuumOK2cPBAPaAe70G4fG/gnx97K8najJw4clO5FagbTKcG2GLbI77t3kp0+N5slPsPln04X5OCF3kcoQstLOEZrbJcDRm4u0TMqfRpec1OF4p14Ozp8qyRs0EnebSzGkIZdNk8EyYjjyZWl6w84LsoAWkAWvR3JXYmQN3MFF55DkPMrPqM6xRvyXYcTyM9WwuHbGwMaKDRQC4MpOTtnVSSVIcSkkPMMW2MeaWUqHirPH+mufnaOtncBw9VOKG52wyz2qjJYN3Wv7x1P1XW06jJ7exys0pJOXc9l6PwAYeIfuBc3VxSzSX2dLSybwxf0SpHncFjZqQjZtnVSBW5ziC5up3bvVHcdcEjKsYBH5pSGrMf00xluFb6P1VuJci5XwYmIgSWVvv4UcnKuWy9/rFg0Gp5BUOLM8cTkx3BYCc7TgymnWuKrm4s6enxzh/YRjCb+vklZpXJIbhCRuSbizYRzhqJTbhdpDxzKTwZXkRz0ml2nxH/stA+LldHsZZ9yBhpLcB5hDRMXybHGabLeTR8SuroMe3Hu9mLVzudeiNS3GSwpACxmjay6vB1cf2jRp8vTl9GkwMm00FeakmjuJ3yPTwWosajNTxAEgHaHNevTtHmpKmcsjs0ghKy5w3Rmd5A7ovz3BUT1EIK2XRwSkz0PJssZh4wxvvPEniSuJmyvLJyZ0scFCNIn2qhyPicTshQ2MkYDpXn4aHAFIluZZaijynHSOe8uctcKSMk7bsjgJ7K2j2zok68HATqerFrHkbc22bMaqKSLB6pZciLiG2aCCUVGeDvVegUoLIGJxxjZ9ylRthdIyuKje8lx4q6LSKJWyAcDZAKsUyvYX+V4GOLvUL5lUzm2X44RiXcmdNaNSFVsbLXKKKP+s43y6Ctr4WneNqIsckXIv8KAQspqpFXmUdONK2LEkioxbCVdFlE1ZCzTWGN3FhLD6HUfcVogzJkVFZE+iDyKdlaNuHh4a8cQPiunocl49voyamNTv2W8HRmd8bZG7NHgSQR62Fe80U6KlhbRXYrAyRmnNI8+HxVkZpiODXcmQ9H5XxGVtEAXQOp5pHminTHWJ1Z1lzXx/aaQ0nQkcVxvyGFRluj2f/AGdLR5G47WXbCCuabzJsjteus84o2XmTYJjngNaXHTfw5k+Sz5cm2Ns0Y8abpHoOCwoYKXFyZHkds3xioqkSCVWSkR55qUNjGR6S53sjZabJ0CXuOkeeZ6SNHak6lNAiZQTC1cnRS0cCFNuI2nsnQ5l4KD+D7nFZZ8svh2LNwVTLERZiAUDIzmNJfiS3g1oJUrsR5KTNsWHSUPst0+CeK4FkyPLiWgJqEsrxJ3rTUJZI7c3W9eQH4qyOCcuyKsmojHhFRiZiSbPuTShtdEQnuVnEb6II4EFK1aodPybbBvuq4gFYJKmdODtD+KgsWoTJaKvE4ek6kI4lRPDtCRnNtj1bqtUJGLLG+CgaVoM1m1/o+zNrH7L9QL38PMKccnGfHklrdHk3eM6URFuywE8F0VhlfJn6iKqXFPl1LqHH0ViVEN2aHAZjC1rY9saDWyqJRbY6aKzPMzjeDGwXyoceBCiWDfFpkrJtdoi4Ce267xvXCnFxdM6cZWrKnL8A+Z4YwWTv5AcyvUZMkccd0jgQg5OkejZHk7MOyhq4/adxP6Lh588ssrfY6mPGsapFmSqCwYkkpQxjNdIc4DAddUoyXs8vzfHPkkAB1J/HQKyK4IbImd4jaf6KYITIyDGLTsREhrFDGPWegztrBx/u7QPucVTLuWx7FjimlVMdECQGweSiyxLgzOOm2XzvHINCZc0Q+DLMicdSrroodjEzwFZGLk6RXKSXchy4gncCB6LZjxRhy+5knOUv7HDZDyVryIocG/A9isFIwBz2kAmuCrzwa+TRbgl3RGBWajSa/IZgY2+lfBYMyqR0NPK4mhDbCqL2V+OYNVKIM1jO64HkVqgzJkRSZlDsSOA3HUeh1C1RfBhkqYZdijG8OHBElYQZt4nh7Q4biutpsvUgY80NsjotWjgrtibKHQWxLPMooi2ScDiNmwuV+Q09tTj/AJN+jz0nGR6XlOVxwN2Wj1PEnzWLLmlllci/HjUFSJ7jSrHI8kigYpM5zMMaTaRsaKPN8zx7pXEk6cFPYZKymjNOc/wjT1KddqFfeyskskkqzsUPkfiChkpD+yo7ktHpHQMmOExu33tem1w+ibUYXjpvyGDIp2aGYrHI0orsSaSliM3mIGt87KaIMzGZYrXZCuhHyzPOXhD+GjDW18fVVylbLoRSREx8isgLMiZfHtSsbzcPpqtWGO6aRjyyqLZo8/h2oH8x3h7v0XV1Mbxs5+KVTRig5co22aDo3NoRyP3rLqF5Nullwa/CusLIaxnHN0QBmMyZvWnGzNkKzHxbTGP4jun3aj8Vpi6Mko2VZarCqjU9GMXbTGTrvCt0uTZkp9mLljuhflF2V2DAIgk5IQQzhBBqP/kJ3/52/wCYf9q4HQ+zpdd+jl39IDz/APXb/mH/AGo6C9krP9DE3Td7h/Ygf4z/ALVHQ+w/UfRQ5pmbp9/dHIG0LTr2T+o+ivcwVSj9Pz3HWrr9ow/CAt2br3b0yw15K3qG/AwcsHi+n6pumL1fo7bgAPa+ijpAs30PQYYNcHHWuG5PjgoSvuLPI5Ki8wGdGJ1hgPvr8FZqX1qvihcE+lZPl6XOP/SA/wAR/JZHpU/JpWqfojSdI3EV1Y+b9Ev6Rexv1j/iQMRmBfvb9Uy0qXkh6xv9v+yrmwgc4OuqNqxYa8lfXt3Q+Qq/0q9lv61/x/2Rp8Hte19FZHCl5Elqm/B1l+FET9u9qgfLersX9OW4oyT3qiykxm0C0t3gjfzWmWpbVUULHRQf1KPGfl/VY9hfvJWX4LqiSHE35VuSTwqS7lmPO4PsXGHzEt9m/eqf0a/kaP1z/j/s6lzMu9kfH9FH6Nfy/wBB+uf8f9lbiGbXkrFpkvJXLV34GG4MBpbdgm924p+l9lfX+iM/JwfbPw/VOofYry34HMFl3VPDw86eX6ocAWSvBcnG/u/VbY6lpVRmeNNidr8lP6t+iOmJ2ry+qP1b9B0xO0+Sn9W/RPTGFjLAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAH/2Q=="
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="data:image/jpeg;base64,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"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  New
                </span>{" "}
                
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                A    
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                 bout Us
                </span>
              </h2>
              <p>
                To change someone's life for the better
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h2 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Our Mission
                  </h2>
                  <p>To make the world a better place .</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Our Vision
                  </h3>
                  <p>Proper education to all.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Join
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Upcoming {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                 Events
                </span>
              </h2>
              <p>
                School for poor African children.
              </p>
              <p>
               4-6.00 pm  30th November 2024.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6deke1d6RbSXlD2wktiOlqUhY6tzTHwbBbg&s"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4UU8ftozgGeK1i_Ls8rfokLC0k6KL7I4JQ&s"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
