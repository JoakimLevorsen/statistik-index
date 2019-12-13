export default [
`
What is the probability that she gets regular cola in one of the glasses and light cola in the
other?
1  1/4
2  1/3
3  1/2
4*  2/3
5  3/4
----------------------------------- FACIT-BEGIN -----------------------------------
It is drawing without replacement, i.e. the hypergeometric distribution:
## We use
dhyper(x=1, m=2, n=2, k=2)
## [1] 0.6666667
## Or we can do it another way and calculate it directly. The probability of getting two times cola
(1/2*1/3)
## [1] 0.1666667
## thus the probability of getting two times cola zero is the same.
(1/2*1/3)
## [1] 0.1666667
## Hence not getting either 2 cola or 2 zeros (and thus getting one of each) is
1 - 2 * (1/2*1/3)
## [1] 0.6666667
2
------------------------------------ FACIT-END ------------------------------------
`,`
In another experiment, a glass of regular cola and a glass of light cola are given to each of 25
tasters. They are told to taste and answer if they think that there is a difference between the
cola in the glasses. The answers are independent of each other.
From experience, one knows that it can be assumed that there is p = 0.8 probability that a
taster can taste the difference between regular and light. Let X denote the number of the 25
tasters who say there is a difference. What will be the variance of X?
1  V(X) = 5
2*  V(X) = 4
3  V(X) = 3
4  V(X) = 2
5  V(X) = 1
----------------------------------- FACIT-BEGIN -----------------------------------
In this setup it is “drawing” with replacement, hence X follows a binomial distribution
X ∼ B(n = 25, p = 0.8)
and we can use Theorem 2.21 to find the variance
n <- 25
p <- 0.8
n*p*(1-p)
## [1] 4
------------------------------------ FACIT-END ------------------------------------
Continue on page 4
3
Exercise II
10 women measured their morning temperature on both July 1st and December 1st. From
the measurements, one would like to investigate whether there is a difference in the morning
temperature for women in the summer compared to the winter. It can be assumed that the
summer measurements are normally distributed and that the winter measurements are normally
distributed.
`,`
Which analysis will be most appropriate?
1  Test for the difference between two proportions
2  Regression analysis
3  (Un-paired) t-test
4*  Paired t-test
5  Test in the binomial distribution
----------------------------------- FACIT-BEGIN -----------------------------------
This is a paired setup, since for each individual there exists two observations of the same
variable at two different times. Hence the two samples of each 10 temperatures can be paired
via the women.
------------------------------------ FACIT-END ------------------------------------
`,`
When the test was carried out a p-value of 0.4 was obtained. This means that:
1  There is a 40% probability that there is a difference between the morning temperature in
the summer compared to the winter.
2  There is a 0.4% probability that there is a difference between the morning temperature
in the summer compared to the winter.
3  The hypothesis cannot be tested.
4  There is definitely a difference between the morning temperature in the summer compared
to the winter.
4
5*  Under the null hypothesis, the probability of obtaining a value of the test statistic which
is less extreme, than the value obtained, is 0.6.
----------------------------------- FACIT-BEGIN -----------------------------------
This derived from the definition of the p-value in Definition 3.22.
------------------------------------ FACIT-END ------------------------------------
Continue on page 6
5
Exercise III
A company has purchased a new 3D printer technology and they want to investigate whether it
can be used to make components that are durable enough to be included in a specific product.
An experiment has been carried out where components, printed with the new technology, have
been used in a batch of test products. These products have then been subjected to a test that
determines their lifetime. It is assumed that the lifetime follows an exponential distribution,
so let X ∼ Exp(λ) denote the lifetime in months. A sample has been collected for n = 16
products. A histogram of the sample is:
Histogram of x
x (month)
Frequency
0 2 4 6 8 10 12 14
0
2
4
6
8
The observed life times has been saved in the vector x and the following R code is run:
## Number of simulations
k <- 10000
nx <- length(x)
## Simulate k times
simxsamples <- replicate(k, rexp(nx, 1/mean(x)))
## Calculate the sample mean
simmeans <- apply(simxsamples, 2, mean)
## Quantiles of the means
quantile(simmeans, c(0.005,0.995))
## 0.5% 99.5%
## 1.70 6.42
quantile(simmeans, c(0.025,0.975))
6
## 2.5% 97.5%
## 2.07 5.68
quantile(simmeans, c(0.05,0.95))
## 5% 95%
## 2.26 5.26
`,`
It was pre-planned to investigate whether it can be shown, at significance level α = 1%, that
the average lifetime mX is over 2 months for the components.
Can this be concluded on the basis of the collected sample and the calculations above (both
conclusion and argument must be correct)?
1*  Since 2 is contained in the calculated 99% confidence interval it cannot be concluded.
2  Since 2 is not contained in the calculated 99% confidence interval it can be concluded.
3  Since 2 is contained in the calculated 95% confidence interval it cannot be concluded.
4  Since 2 is not contained in the calculated 95% confidence interval it can be concluded.
5  With the given information it is not possible to answer this question.
----------------------------------- FACIT-BEGIN -----------------------------------
To find the 99% confidence interval we find the 0.005 and 0.995 quantiles of the simulated
means (the first of the three quantile calculations above). Since 2 is contained in this interval
which is [1.70, 6.42], we cannot conclude with α = 1% that the true average lifetime is not 2.
------------------------------------ FACIT-END ------------------------------------
`,`
What is the sample mean of the collected sample?
1  x¯ = 3.40
2  x¯ = 3.76
3  x¯ = 3.875
4  x¯ = 4.06
7
5*  With the given information it is not possible to answer this question.
----------------------------------- FACIT-BEGIN -----------------------------------
One approach is to take the value between the confidence intervals. But for this to be the mean,
we need to assume that the means are normally distributed (so the quantiles of the means are
symmetrical), and this is only true if nx is big enough so it satisfies the central limit theorem
and we don’t know if this is the case. Therefore we cannot find the mean of the sample.
------------------------------------ FACIT-END ------------------------------------
`,`
A new sample of lifetimes has been collected where a new material has been used to print the
components. They are subsequently subjected to the same tests and the observed lifetimes are
stored in the vector y. There are nY = 17 observations in the new sample.
The following R code is run afterwards:
## Number of simulations
k <- 10000
nx <- length(x)
ny <- length(y)
## Simulate k times
simxsamples <- replicate(k, rexp(nx, 1/mean(x)))
simysamples <- replicate(k, rexp(ny, 1/mean(y)))
## Calculate the simulated statistics
simdifmeans <- apply(simysamples, 2, mean) - apply(simxsamples, 2, mean)
simdifmedians <- apply(simysamples, 2, median) - apply(simxsamples, 2, median)
## Quantiles of the simulated statistics
quantile(simdifmeans, c(0.025,0.975))
## 2.5% 97.5%
## 0.733 9.443
quantile(simdifmeans, c(0.05,0.95))
## 5% 95%
## 1.30 8.59
quantile(simdifmedians, c(0.025,0.975))
## 2.5% 97.5%
## -0.428 8.265
quantile(simdifmedians, c(0.05,0.95))
## 5% 95%
## 0.0837 7.3868
8
Which of the following conclusions can be drawn on the basis of these calculations?
1  At α = 5% significance level it can be concluded that the 50% quantile of the product
lifetime is higher with components of the new material.
2*  At α = 10% significance level it can be concluded that the 50% quantile of the product
lifetime is higher with components of the new material.
3  At α = 5% significance level it can be concluded that there is at least 50% probability
that the product lifetime is higher with components of the new material.
4  At α = 10% significance level it can be concluded that there is at least 50% probability
that the product lifetime is higher with components of the new material.
5  With the given information no conclusions can be drawn.
----------------------------------- FACIT-BEGIN -----------------------------------
The 50% quantile is the same as the median. Therefore we are using the simdifmedians.From
the two last calculations in the R-code it can be seen that the 95% confidence overlaps with 0,
but the 90% confidence interval does not. Therefore, with α = 5%, we cannot conclude that
there is a difference between the medians, but at α = 10% we can, so answer 2 is correct.
------------------------------------ FACIT-END ------------------------------------
Continue on page 10
9
Exercise IV
Assume that X is normally distributed with mean 10 and variance 4, Y is normally distributed
with mean 20 and variance 25, and X and Y are independent.
`,`
Then 2Y − 2X + 4 has the variance:
1  36
2  58
3  84
4*  116
5  None of the values above.
----------------------------------- FACIT-BEGIN -----------------------------------
Use the variance identities in Theorem 2.54 and 2.56 to get
V(2Y − 2X + 4) = 4 V(Y ) + 4 V(X) = 4 · 4 + 4 · 25 = 116.
Or you can simulate it:
k <- 100000
x <- rnorm(k, 10, sqrt(4))
y <- rnorm(k, 20, sqrt(25))
z <- 2*y - 2*x + 4
var(z)
## [1] 116.0609
------------------------------------ FACIT-END ------------------------------------
`,`
What is the standard deviation of f(X, Y ) = 2Y
2+X3/3 (tip: if you solve this using simulation,
remember to have many repetitions and choose the answer with the result being approx. ± 10
from the stated number in the answer)?
1  σf(X,Y ) ≈ 100
10
2  σf(X,Y ) ≈ 250
3  σf(X,Y ) ≈ 350
4*  σf(X,Y ) ≈ 450
5  σf(X,Y ) ≈ 5 · 104
----------------------------------- FACIT-BEGIN -----------------------------------
Solve it using simulation (as presented in beginning of Chapter 4)
k <- 1000000
x <- rnorm(k, 10, sqrt(4))
y <- rnorm(k, 20, sqrt(25))
sd(2*y^2 + x^3/3)
## [1] 460.3031
or use the linear approximation with the error propagation formula in Method 4.3
σ
2
f(X,Y ) = (∂f
∂x)
2σ
2
x + (∂f
∂y )
2σ
2
y
= (3X
2
/3)2
· 4 + (4Y )
2
· 25
= X
4
· 4 + 16Y
2
· 25
= 104
· 4 + 16 · 202
· 25
sqrt(10^4 * 4 + 16 * 20^2 * 25)
## [1] 447.2136
------------------------------------ FACIT-END ------------------------------------
Continue on page 12
11
Exercise V
The association between pressure (p) and depth (h) in an open liquid container may be described
theoretically by the equation
p = p0 + ρgh ,
where p0 is atmospheric pressure, ρ is the density of the liquid, and g is the acceleration due
to gravity. An experiment was conducted with the purpose of determining the density of a
special liquid. 10 measurements of depth (in m) and pressure (in Pa) were conducted in this
liquid, and the results were assigned to two vectors in R, depth and pressure, respectively.
Furthermore, the following R code was run:
model1 <- lm(pressure ~ depth)
summary(model1)
##
## Call:
## lm(formula = pressure ~ depth)
##
## Residuals:
## Min 1Q Median 3Q Max
## -119166 -73422 30513 53635 124689
##
## Coefficients:
## Estimate Std. Error t value Pr(>|t|)
## (Intercept) 1.019e+08 5.867e+04 1737.529 < 2e-16 ***
## depth 5.031e+03 9.455e+02 5.321 0.000711 ***
## ---
## Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
##
## Residual standard error: 85880 on 8 degrees of freedom
## Multiple R-squared: 0.7797,Adjusted R-squared: 0.7521
## F-statistic: 28.31 on 1 and 8 DF, p-value: 0.0007105
12
`,`
Give the estimate of the atmospheric pressure during the experiment:
1  5.031 · 103 Pa
2  5.867 · 104 Pa
3  9.455 · 107 Pa
4*  1.019 · 108 Pa
5  1.025 · 108 Pa
----------------------------------- FACIT-BEGIN -----------------------------------
Estimated atmospheric pressure corresponds to the model intercept. It can be seen from the
theoretical equation that the atmospheric pressure is the bias term corresponding to our normal
β0.
------------------------------------ FACIT-END ------------------------------------
`,`
One would like to test the hypothesis that the expected atmospheric pressure is 1.005 · 108 Pa
under the experimental conditions. Give the usual test statistic used to test this hypothesis:
1  tobs = 1738
2  tobs = 5.321
3*  tobs = 23.86
4  tobs = 28.31
5  tobs = 0.000711
----------------------------------- FACIT-BEGIN -----------------------------------
Method 5.14 for the intercept parameter β0 with βˆ
0 = 1.019 · 108
, β0,0 = 1.005 · 108 and
σˆβ0 = 5.867 · 104
. Then
tobs =
1.019 · 108 − 1.005 · 108
5.867 · 104
= 23.86
13
------------------------------------ FACIT-END ------------------------------------
`,`
Give a 95% confidence interval for the parameter which describes the association between depth
and pressure:
1  1.019 · 108 ± 2.306 · 85880/(10 − 2)
2  1.019 · 108 ± 2.306 · 85880
3  5031 ± 2.306 · 85880
4  1.019 · 108 ± 2.306 · 5.867 · 104
5*  5031 ± 2.306 · 945.5
----------------------------------- FACIT-BEGIN -----------------------------------
Method 5.15 with βˆ
1 = 5031, ˆσβ1 = 945.5 (both from the R-output) and t0.975 found using
qt(0.975, df = 10-2)
## [1] 2.306004
------------------------------------ FACIT-END ------------------------------------
`,`
Give an estimate of the density of the liquid during the experiment, when the acceleration due
to gravity, g, is 9.82 N/kg:
1*  512 kg/m3
2  1004 kg/m3
3  307 kg/m3
4  802 kg/m3
5  610 kg/m3
14
----------------------------------- FACIT-BEGIN -----------------------------------
The model slope is β1 = ρg, so
ρˆ =
βˆ
1
g
=
5031
9.82
= 512
------------------------------------ FACIT-END ------------------------------------
Continue on page 16
15
Exercise VI
A sample was taken with independent observations from a normally distributed population.
One would like to test the hypothesis that the mean is zero against the alternative, that it is
different from zero. The test statistic for the test follows a t-distribution. A p-value of 0.001
was obtained.
`,`
What is then known about the 99% confidence interval for the mean?
1  It contains zero.
2*  It does not contain zero.
3  It contains zero, but not the estimate of the mean.
4  There is not enough information to know anything specific about the confidence interval.
5  It contains 0.01.
----------------------------------- FACIT-BEGIN -----------------------------------
It is a one-sample t-test. We use Theorem 3.33 and we can see that testing the null hypothesis
H0 : µ = 0 and rejecting it on a significance level α = 0.01 means that the 0 is not contained
in the 99% confidence interval.
------------------------------------ FACIT-END ------------------------------------
`,`
If there were n = 20 observations in the sample, what do we then know about the observed
test statistic?
1  tobs = −1.33 or tobs = 1.33
2  tobs = −1.73 or tobs = 1.73
3  tobs = −3.55 or tobs = 3.55
4  tobs = −3.58 or tobs = 3.58
5*  tobs = −3.88 or tobs = 3.88
16
----------------------------------- FACIT-BEGIN -----------------------------------
It is a one-sample t-test and since had have a p-value of 0.001, hence
2 · P(T > tobs) = 0.001 ⇔
P(T > tobs) = 0.001/2 = 0.0005
we need to find the 0.05% or 99.95% quantile. So
qt(0.001/2, df=19)
## [1] -3.883406
or
qt(1 - 0.001/2, df=19)
## [1] 3.883406
------------------------------------ FACIT-END ------------------------------------
Continue on page 18
17
Exercise VII
The Danish Veterinary and Food Administration wants to reduce the proportion of resistant
bacteria in pigs intestinal flora, as they pose a human risk. qPCR is one microbiological method
to count the number of specific genes in a faeces sample. Below is the count of three genes:
16S, which is a reference gene, and two genes that encode resistance to tetracycline (tetO and
tetM). Four samples were taken at different times (first Sample 1, then 2, 3 and finally 4) on
the same farm and the researchers want to investigate whether changes have occurred.
16S tetO tetM Sum
Sample 1 4675 171 76 4922
Sample 2 2222 95 1 2318
Sample 3 2750 49 2 2801
Sample 4 2040 47 1 2088
Sum 11687 362 80 12129
A χ
2
-test should be carried out to determine if the proportion of resistant genes has changed
over time.
`,`
The degrees of freedom in this test is:
1  8
2  12
3*  6
4  9
5  It doesn’t make sense to do a χ
2
-test, when two of the observations are 1.
----------------------------------- FACIT-BEGIN -----------------------------------
It is the χ
2
-test in Method 7.22 which is used. The degrees of freedom is:
(r − 1)(c − 1) = 3 ∗ 2 = 6
------------------------------------ FACIT-END ------------------------------------
18
`,`
Under the null hypothesis what is the expected number of tetM copies in Sample 4?
1  20
2  1
3*  13.77
4  26.10
5  696
----------------------------------- FACIT-BEGIN -----------------------------------
The expected number in the cell is found as in equation ?? by
columntotal ∗ rowtotal
grandtotal = 80 ∗ 2088/12129 = 13.77
------------------------------------ FACIT-END ------------------------------------
`,`
The test statistic turns out to be 132.3. The relevant p-value is found using which of the
following calls in R?
1  1 - dchisq(132.3, df=6)
2*  1 - pchisq(132.3, df=6)
3  qchisq(132.3, df=6)
4  pchisq(132.3, df=6)
5  qchisq(1/132.3, df=6)
----------------------------------- FACIT-BEGIN -----------------------------------
See Method 7.22. We need to find P(χ
2 > χ2
obs), which can by done either by
19
1 - pchisq(132.3, df=6)
## [1] 0
which, since the value is below the machine precision is zero, actually by
pchisq(132.3, df=6, lower.tail = FALSE)
## [1] 4.212873e-26
it can be calculated, but in practice it so small that is doesn’t make much difference, but maybe
nicer to be led to think that it is exactly zero.
------------------------------------ FACIT-END ------------------------------------
20
`,`
It has previously been planned to investigate whether the occurrence of tetO has changed
between the first sample and fourth sample. For reasons not explained here, the observations
of tetM should not be considered in this test. The following code has been run with the
associated code output:
prop.test(x=c(171, 47), n=c(4675+171, 2040+47), correct=FALSE, conf.level=0.95)
##
## 2-sample test for equality of proportions without continuity
## correction
##
## data: c(171, 47) out of c(4675 + 171, 2040 + 47)
## X-squared = 7.8067, df = 1, p-value = 0.005205
## alternative hypothesis: two.sided
## 95 percent confidence interval:
## 0.004550394 0.020982546
## sample estimates:
## prop 1 prop 2
## 0.03528683 0.02252036
The usual α = 0.05 significance level is used. What is the conclusion (both the conclusion and
the argumentation must be correct)?
1  No significant change has been detected, since 0.02098 < 0.02252.
2  A significant change has been detected, since 0.0052 < 0.95, but it is not possible to
conclude if the occurrence has increased or decreased.
3  A significant change has been detected, since 0.0052 < 0.05, and the occurrence of tetO
has increased.
4  A significant change has been detected, since 0.0052 < 0.95, and the occurrence of tetO
has increased.
5*  A significant change has been detected, since 0.0052 < 0.05, and the occurrence of tetO
has decreased.
----------------------------------- FACIT-BEGIN -----------------------------------
We compare the p-value (0.0052) with the significance level of 0.05. Since P − value < α there
is a significant change. If we look at the sample estimates we see that the estimate has changed
from 0.035 in the first sample to 0.023 in the fourth sample. So answer is correct.
21
------------------------------------ FACIT-END ------------------------------------
Continue on page 22
22
Exercise VIII
The IQ of a randomly selected individual is modeled by a normally distributed random variable.
50% of the population have an IQ over 100 (and 50% have an IQ below 100). Suppose 68% of
the population have an IQ in the range of 85-115.
`,`
What percentage of the population have an IQ of at least 140 and is thus considered geniuses
according to this model?
1  0.01%
2  1%
3  4%
4*  0.4%
5  0.06%
----------------------------------- FACIT-BEGIN -----------------------------------
Use need to use the standardized normal distribution. Theorem 2.43. First we find out how
many percent have IQ < 85:
## The quantile at 85
50-68/2
## [1] 16
We find out that this is 16% of the population. We now need to find the 0.16 quantile in the
std. normal distribution:
## The 0.16 quantile in the std. norm.
qnorm(0.16)
## [1] -0.9944579
We can then use this in the equation to find the standard deviation of the IQ distribution:
Z =
X − µ
σ
⇐⇒ σ =
X − µ
Z
=
85 − 100
−0.994
23
## The standard deviation in the IQ distribution
sigma <- (85-100) / qnorm(0.16)
sigma
## [1] 15.0836
And we now have the mean and the standard deviation of the IQ distribution and like usual
we can find the proportion of people with IQ > 140 as:
## The proportion of geniueses
1 - pnorm(140, mean=100, sd=sigma)
## [1] 0.004002158
------------------------------------ FACIT-END ------------------------------------
Continue on page 25
24
Exercise IX
The data below have been collected from two groups:
Group 1: 10.5, 9.3, 10.7, 10.8, 11.2
Group 2: 8.9, 9.5, 10.2, 9.8, 10.3
All measurements are assumed to be taken independent. The Group 1 measurements are
believed to originate from a normal distribution, and the measurements in Group 2 are assumed
to originate from a normal distribution. In addition, it is assumed that the variances in the
two normal distributions are identical.
`,`
What is the sample mean of the Group 2 sample?
1*  9.74
2  9.8
3  10.2
4  10.31
5  48.5
----------------------------------- FACIT-BEGIN -----------------------------------
Simply calculate the sample mean of the values from Group 2 in R:
y <- c(8.9, 9.5, 10.2, 9.8, 10.3)
mean(y)
## [1] 9.74
------------------------------------ FACIT-END ------------------------------------
`,`
What will be the numerical value of the test statistic for the usual test of the hypothesis that
there is no difference in mean of the two groups?
1  0.8
25
2  1.04
3*  1.86
4  2.19
5  2.55
----------------------------------- FACIT-BEGIN -----------------------------------
This is a two-sample t-test, hence either use the formulas in Method 3.47 or maybe easier do
it in R by:
x <- c(10.5, 9.3, 10.7, 10.8, 11.2)
y <- c(8.9, 9.5, 10.2, 9.8, 10.3)
## Same result of tobs if the variance is pooled
t.test(x, y)
##
## Welch Two Sample t-test
##
## data: x and y
## t = 1.8564, df = 7.601, p-value = 0.1024
## alternative hypothesis: true difference in means is not equal to 0
## 95 percent confidence interval:
## -0.1927507 1.7127507
## sample estimates:
## mean of x mean of y
## 10.50 9.74
# Or we can specify the variances as being equal (in which case the pooled variance will be used for the test). Both approaches are fine.
t.test(x, y, var.equal = TRUE)
##
## Two Sample t-test
##
## data: x and y
## t = 1.8564, df = 8, p-value = 0.1005
## alternative hypothesis: true difference in means is not equal to 0
## 95 percent confidence interval:
## -0.1840545 1.7040545
## sample estimates:
## mean of x mean of y
## 10.50 9.74
------------------------------------ FACIT-END ------------------------------------
26
`,`
What is the 90% confidence interval for the mean in Group 1?
1  [9.61, 11.39]
2  [9.32, 11.68]
3  [8.92, 12.03]
4  [9.87, 12.03]
5*  None of the intervals above are correct.
----------------------------------- FACIT-BEGIN -----------------------------------
Use the formula in Method 3.9 or do the calculation in R by:
x <- c(10.5, 9.3, 10.7, 10.8, 11.2)
t.test(x, conf.level=0.9)
##
## One Sample t-test
##
## data: x
## t = 32.717, df = 4, p-value = 5.204e-06
## alternative hypothesis: true mean is not equal to 0
## 90 percent confidence interval:
## 9.815813 11.184187
## sample estimates:
## mean of x
## 10.5
------------------------------------ FACIT-END ------------------------------------
`,`
A new experiment must be designed in order to achieve a greater power of the statistical test for
the mean values. There is still an equal number of observations in each group. The researchers
want to have 99% power to discover a difference in mean of at least 1 between the two groups,
at significance level 1%. As a guess of the variance, the pooled variance estimate from the two
samples are used.
What is the minimum number of observations needed from each group in order for the above
requirements to be fulfilled?
27
1  At least 4
2  At least 6
3  At least 12
4  At least 18
5*  At least 22
----------------------------------- FACIT-BEGIN -----------------------------------
First use Method 3.52 as done in Example 2.85 to calculate the pooled variance estimate by:
x <- c(10.5, 9.3, 10.7, 10.8, 11.2)
y <- c(8.9, 9.5, 10.2, 9.8, 10.3)
n1 <- length(x)
n2 <- length(y)
varp <- ((n1-1)*var(x)+(n2-1)*var(y)) / (n1+n2-2)
Then use this to calculate the needed sample size by inserting the 4 out of 5 needed values and
the R calculate the sample size, see Section ??:
power.t.test(delta=1, sd=sqrt(varp), sig.level=0.01, power=0.99)
##
## Two-sample t test power calculation
##
## n = 21.87928
## delta = 1
## sd = 0.6473021
## sig.level = 0.01
## power = 0.99
## alternative = two.sided
##
## NOTE: n is number in *each* group
------------------------------------ FACIT-END ------------------------------------
Continue on page 29
28
Exercise X
How much clothes a person wears (the clothing level) has a large influence on the level of
comfort in offices. In the table below samples from three rooms of the average clothing level
(on a scale 0 to 1) are presented:
Room 1 Room 2 Room 3
0.43 0.56 0.38
0.36 0.71 0.39
0.41 0.20 0.48
0.42 0.57 0.52
0.41 0.69 0.23
0.54 0.55 0.37
0.61 0.78 0.60
0.53 0.42 0.46
0.49 0.42 0.44
0.69 0.59 0.44
Means 0.49 0.55 0.43
As an initial analysis, a one-way analysis of variance, with room as explanatory factor, is carried
out. The result is shown in the R output below (where significant codes have been removed
and some numbers are replaced by letters):
anova(lm(clo ~ room, data=Data))
## Analysis of Variance Table
##
## Response: clo
## Df Sum Sq Mean Sq F value Pr(>F)
## room 2 0.06963 0.034813 A 0.1385
## Residuals 27 0.44147 0.016351
`,`
What is the value of A (rounded) in the R output above?
1  A = 1.07
2  A = 2.00
3*  A = 2.13
4  A = 4.00
5  A = 4.26
29
----------------------------------- FACIT-BEGIN -----------------------------------
See theorem 8.6.
((0.06963)/2) / (0.44147/27)
## [1] 2.129261
## or simply
0.034813 / 0.016351
## [1] 2.129105
------------------------------------ FACIT-END ------------------------------------
`,`
What is the conclusion (at significance level α = 0.05) about the difference in mean clothing
level between the three rooms (both the conclusion and the argument must be correct)?
1  There is a significant difference since 0.016351 < 0.05.
2  There is not a significant difference since 0.016351 < 0.05.
3  There is a significant difference since 0.1385 > 0.05.
4*  There is not a significant difference since 0.1385 > 0.05.
5  There is a significant difference since 0.034813 < 0.05.
----------------------------------- FACIT-BEGIN -----------------------------------
By examining the p-value which can be read as 0.1385 from the R output, it is clear that this
is lower than the significance level of α = 0.05 and therefore there is no significant difference.
------------------------------------ FACIT-END ------------------------------------
`,`
What is a pre-planned 95% confidence interval for the difference between the mean value in
Room 1 and Room 2 (i.e. it was planned to make this confidence interval only, before the
sample was collected)?
30
1  [0.12, 0.45]
2  [0.03, 0.25]
3  [−0.17, 0.09]
4*  [−0.06, 0.18]
5  [−0.30, 0.42]
----------------------------------- FACIT-BEGIN -----------------------------------
We use Method 8.9 to calculate the single pre-planned post-hoc 95% confidence interval
0.55-0.49+c(-1,1)*qt(0.975,df=27)*sqrt(0.016351*2/10)
## [1] -0.05733529 0.17733529
The degrees of freedom n − k = 27 and the SSE
n−k = MSE = 0.016351 we get from the ANOVA
table printed in the R result.
------------------------------------ FACIT-END ------------------------------------
31
`,`
The following histogram, normal qq-plot and box-plot are of the residuals:
Histogram af residualer
Residualer
Frequency
−0.4 −0.2 0.0 0.2
0 2 4 6 8 10 12
●
●
● ●
●
●
●
●
●
●
●
●
●
●
●
●
●
● ●
●
●
●
●
●
●
●
●
●
●●
−2 −1 0 1 2
−0.3 −0.2 −0.1 0.0 0.1 0.2
Normal Q−Q Plot
Theoretical Quantiles
Sample Quantiles
●
−0.3 −0.2 −0.1 0.0 0.1 0.2
What can rightly be judged based on these plot from the books definition of outliers?
1  That it is clear that the distribution of residuals is left-skewed.
2  That the residuals appears normally distributed without any outliers.
3*  That the residuals appears normally distributed, though with a single outlier.
4  That it is clear that the distribution of residuals is right-skewed.
5  That the residuals do not follow a normal distribution.
----------------------------------- FACIT-BEGIN -----------------------------------
From the histogram it is not clear to see that the distribution is left-skewed. From the QQ-plot
it is seen that the points approximately follow the line, except for the lowest point. And this
can also be concluded to be an outlier from the boxplot.
------------------------------------ FACIT-END ------------------------------------
Continue on page 33
32
Exercise XI
The following sample has been sorted:
10, 25, 25, 36, 37, 41, 54, 64, 68, 83
`,`
What is the median of the sample?
1  37
2  38
3*  39
4  40
5  41
----------------------------------- FACIT-BEGIN -----------------------------------
quantile(x, type=2)
## 0% 25% 50% 75% 100%
## 10 25 39 64 83
------------------------------------ FACIT-END ------------------------------------
`,`
What is the sample variance?
1  V(x) = 22.60
2*  V(x) = 510.7
3  V(x) = 1521
4  V(x) = 1962
5  V(x) = 2052
----------------------------------- FACIT-BEGIN -----------------------------------
33
var(x)
## [1] 510.6778
------------------------------------ FACIT-END ------------------------------------
The exam is finished. Have a great summer!
34`]