export default [`
Provide an estimate for the correlation coefficient, ρ, between X and Y :
1  ρˆ = 0.12
2  ρˆ = 0.22
3  ρˆ = 0.64
4  ρˆ = 0.73
5*  ρˆ = 0.82
----------------------------------- FACIT-BEGIN -----------------------------------
We copy into R to read in the data two vectors
x <- c(38, 35, 47, 38, 42, 41, 48, 35)
y <- c(25, 21, 26, 23, 28, 27, 29, 18)
and the we calculate the estimate of the correlation as the sample correlation
cor(x,y)
## [1] 0.8237548
2
------------------------------------ FACIT-END ------------------------------------
Continues on page 3
3
Exercise II
A sample has been taken from a population. The following histogram has been generated:
Histogram
Frequency
−1.5 −1.0 −0.5 0.0 0.5 1.0 1.5
0 1 2 3 4
`,`
What is the sample size n?
1  n = 10
2*  n = 14
3  n = 20
4  n = 28
5  n = 40
----------------------------------- FACIT-BEGIN -----------------------------------
In the histogram the height of each bar is the number of observations in the sample which is
in the interval spanned by the bar on the x-axis. So we can simply add heights of the bars to
get the sample size, so
n = 2 + 1 + 2 + 4 + 3 + 2 = 14.
------------------------------------ FACIT-END ------------------------------------
4
`,`
The sample variance has been calculated to s
2 = 0.79. What is the sample standard deviation?
1  0.31
2  0.40
3  0.62
4*  0.89
5  1.58
----------------------------------- FACIT-BEGIN -----------------------------------
The sample standard deviation, s is found by taking the square root of the sample variance
(Definition ??)
s =
√
s
2 =
√
0.79 = 0.89.
------------------------------------ FACIT-END ------------------------------------
Continues on page 6
5
Exercise III
In a study 605 test persons, all with a record of previous heart disease, were randomized to
one of two possible diets (A or B), in order to study the effect of diet on health. After an
observation period of 4 years the test persons were classified according to health status: (I)
dead, (II) cancer, (III) other disease, (IV) well.
Health status
I II III IV Total
Diet A 15 24 25 239 303
Diet B 7 14 8 273 302
Total 22 38 33 512 605
The null hypothesis in the study was that there is no association between diet and health.
`,`
State the distribution of the usual test statistics, when assuming that the null hypothesis is
true:
1  The usual test statistics follows a χ
2
-distribtuion with 8 degrees of freedom
2  The usual test statistics follows a F-distribution with (1, 603) degrees of freedom
3  The usual test statistics follows a t-distribution with 4 degrees of freedom
4  The usual test statistics follows a t-distribution with 302 degrees of freedom
5*  The usual test statistics follows a χ
2
-distribution with 3 degrees of freedom
----------------------------------- FACIT-BEGIN -----------------------------------
The setup of the data is a multi-sample proportion setup (chapter ??). We must test the
hypothesis, that the proportions in each group is equal
H0 : P1 = p2 = p3 = p4.
and under this hypothesis the test statistic follows a χ
2
-distribution with c − 1 degrees of
freedom, and there are 4 groups, so 3 degrees of freedom (Method ??).
------------------------------------ FACIT-END ------------------------------------
`,`
We now only consider the proportion of test persons who are healthy at the end of the 4 year
period. We want to estimate at 95% confidence interval for the difference in proportions of test
6
persons who are healthy for each of the 2 diets. Which of the suggestions below is the correct
code in R to achieve this?
1  prop.test(x=c(512), n=c(605), correct=FALSE)
2  prop.test(x=c(303,302), n=c(512,512), correct=FALSE)
3*  prop.test(x=c(239,273), n=c(303,302), correct=FALSE)
4  prop.test(x=c(239,273), n=c(605,605), correct=FALSE)
5  prop.test(x=c(239,273), n=c(512,512), correct=FALSE)
----------------------------------- FACIT-BEGIN -----------------------------------
We need the observed proportion which are well for each diet. So on Diet A 239 out of 303 are
well and for Diet B 273 out of 302 are well, and these numbers are passed to prop.test, which
then prints out the estimated confidence interval.
------------------------------------ FACIT-END ------------------------------------
Continues on page 8
7
Exercise IV
In the production of a consumer product 3 subprocesses are involved, denoted A, B and C. The
time (in hours) it takes to complete each subprocess is represented with a random variable,
which we denote XA, XB and XC, respectively. It can be assumed, that XA, XB and XC
are all independent and normally distributed given by XA ∼ N(12, 2
2
), XB ∼ N(25, 3
2
) and
XC ∼ N(42, 4
2
).
The total production time, Y, is now defined by
Y = XA + XB + XC.
`,`
State the probability that the total production time, Y , exceeds 85 hours:
1  0.0081
2  0.1080
3*  0.1326
4  0.4180
5  0.6301
----------------------------------- FACIT-BEGIN -----------------------------------
We need to find the mean and variance of Y , which we know is normal distributed, since a
linear function of normal distributed random variables is also normal distributed.
We use the identities in Chapter ?? to get
µY = E(Y ) = E(XA + XB + XC) = E(XA) + E(XB) + E(XC) = 12 + 25 + 42 = 79,
and
σ
2
Y = V(Y ) = V(XA + XB + XC) = V(XA) + V(XB) + V(XC) = 4 + 9 + 16 = 29.
Alternatively we could also have simulated the variance in R.
k <- 1000000
X_a <- rnorm(k, 12, 2)
X_b <- rnorm(k, 25, 3)
X_c <- rnorm(k, 42, 4)
Y <-X_a + X_b + X_c
var(Y)
## [1] 28.99541
8
This we use to look up the probability P(Y > 85) = 1 − P(Y ≤ 85) in R by:
1 - pnorm(q=85, mean=79, sd=sqrt(29))
## [1] 0.1326027
------------------------------------ FACIT-END ------------------------------------
`,`
An engineer is now able to perform some optimization of the process, so that the improved
process time Y
∗
, becomes
Y
∗ = 0.9 · XA + 0.8 · XB + XC,
where XA, XB and XC are defined as in the previous question.
State the variance of Y
∗
:
1  V(Y
∗
) = (0.9 + 0.8 + 1) · (22 + 32 + 42
)
2  V(Y
∗
) = (0.9
2 + 0.8
2 + 12
) · (22 + 32 + 42
)
3  V(Y
∗
) = 0.9 · 2
2 + 0.8 · 3
2 + 1 · 4
2
4*  V(Y
∗
) = 0.9
2
· 2
2 + 0.8
2
· 3
2 + 12
· 4
2
5  V(Y
∗
) = 22 + 32 + 42
----------------------------------- FACIT-BEGIN -----------------------------------
We use again the identities in Chapter ?? to get
σ
2
Y ∗ = V(Y
∗
) = V(0.9 · XA + 0.8 · XB + XC,)
= 0.9
2 V(XA) + 0.8
2 V(XB) + V(XC)
= 0.9
2
· 2
2 + 0.8
2
· 3
2 + 12
· 4
2
------------------------------------ FACIT-END ------------------------------------
Continues on page 10
9
Exercise V
The yearly rainfall has been registered within a region for the last 100 years. It can be assumed
that the rainfall is independent from year to year. The cumulative distribution for the yearly
rainfall is shown in the figure below:
660 680 700 720 740 760
0.0
0.2
0.4
0.6
0.8
1.0
Cumulative distribution
rainfall [mm]
Fn(x)
The following summary of the data has been conducted by the use of R, where the yearly
rainfall measurements are stored in the variable rainfall:
> var(rainfall)
[1] 412.7042
> summary(rainfall)
Min. 1st Qu. Median Mean 3rd Qu. Max.
652.8 686.6 701.9 701.3 714.9 749.1
Continues on page 11
10
`,`
Which of the following statements is not correct?
1  The estimate of the standard deviation of the mean ˆσX¯ , becomes
√
412.7042
10 mm
2  The 50% quantile for the 100 observations is 701.9 mm
3  The standard deviation of the sample, s, for the 100 measurements is √
412.7042 mm
4  50% of the 100 observations are between 686.6 and 714.9 mm
5*  The estimated coefficient of variation for the 100 observations becomes 412.7042
701.9
----------------------------------- FACIT-BEGIN -----------------------------------
Lets go through them one by one:
1. TRUE statement. The formula for the estimate is √s
n
(also called the standard error of
the mean)
2. TRUE statement. Seen from the summary() call
3. TRUE statement. Standard deviation is the square root of the variance
4. TRUE statement. 686.6 is the first quartile (25% quantile) and 714.9 is the third quartile
(75% quantile), and certainly 50% of the observations lies between the 25% and 75%
quantile
5. FALSE statement. The estimated coefficient of variation is Vˆ =
s
x¯ =
√
412.7042
701.3
------------------------------------ FACIT-END ------------------------------------
`,`
Provide a 95% confidence interval for the variance of the rainfall based on the 100 observations,
still assumed to be normally distributed:
1  [
20.315122
·134.6416
99 ;
20.315122
·69.22989
99 ]
2  [
20.315122
·99
134.6416 ;
20.315122
·99
69.22989 ]
3*  [
412.7042·99
128.422 ;
412.7042·99
73.36108 ]
4  [
412.7042·99
123.2252 ;
412.7042·99
77.04633 ]
11
5  [
20.31512·99
123.2252 ;
20.31512·99
77.04633 ]
----------------------------------- FACIT-BEGIN -----------------------------------
We find the formula for a 1 − α confidence interval for the variance of a normal distributed
population in Method ?? and insert the values
"
s
2
(n − 1)
χ
2
1−α/2
,
s
2
(n − 1)
χ
2
α/2
#
The chi-square quantiles are found in R as
qchisq(c(0.025, 0.975), 99)
## [1] 73.36108 128.42199
------------------------------------ FACIT-END ------------------------------------
Continues on page 13
12
`,`
We continue with the exercise from the previous page. The following code in R has now been
run:
k = 10^5
Q5 = function(x){ quantile(x, 0.95) }
samples = replicate(k, sample(rainfall, replace = TRUE))
simvalues = apply(samples, 2, Q5)
interval = quantile(simvalues, c(0.025,0.975))
which gives the result:
> interval
2.5% 97.5%
728.9515 742.0814
What has been calculated in the vector interval?
1  A 95% confidence interval for the mean of the yearly rainfall (parametric bootstrap)
2  A 95% confidence interval for the 5% quantile of the yearly rainfall (parametric bootstrap)
3*  A 95% confidence interval for the 95% quantile of the yearly rainfall (non-parametric
bootstrap)
4  A 95% confidence interval for the 2.5% and 97.5% quantile of the yearly rainfall (nonparametric bootstrap)
5  A 95% confidence interval for the 2.5% and 97.5% quantile of the yearly rainfall (parametric bootstrap)
----------------------------------- FACIT-BEGIN -----------------------------------
We look at the R code and see that it is a bootstrapping is carried out by simulating the sample
100000 times, and not assuming any distribution (since the sample function is used), therefore
it is non-parametric.
The statistic calculated for each simulated sample is the 95% quantile and since the quantiles
taken for these values are the 2.5% and the 97.5%, then the results is a 95% confidence interval
95% quantile.
------------------------------------ FACIT-END ------------------------------------
Continues on page 14
13
Exercise VI
We consider an experiment that can result in one of two possible outcomes, here denoted A
or B. The probability of outcome A is denoted P(A). By defintion we get the probability of
outcome B as P(B) = 1 − P(A).
`,`
Assume that we observe a random variable, X, which counts the number of times that we
observe the outcome A out of n = 300 independent trials of the experiment. If we assume that
P(A) = 0.40 in a single trial, what is then the expected number E(X) and variance V(X)?
1  E(X) = 300 · 0.4 · (1 − 0.4) and V(X) = 3002
· 0.4
2  E(X) = 300 · 0.4 and V(X) = 3002
· 0.4 · 0.6
3*  E(X) = 300 · 0.4 and V(X) = 300 · 0.4 · 0.6
4  E(X) = 300 · 0.4 · 0.6 and V(X) = 3002
· 0.4
2
· 0.6
2
5  E(X) = 300 · 0.4 · 0.6 and V(X) = 300 · 0.4
2
· 0.6
2
----------------------------------- FACIT-BEGIN -----------------------------------
X follows a Binomial distribution with p = 0.4 and we have a formula for the mean and variance
defined in Theorem ??, which we use to get
µ = E(X) = np = 300 · 0.4,
σ
2 = V(X) = np(1 − p) = 300 · 0.4 · 0.6.
------------------------------------ FACIT-END ------------------------------------
`,`
Regardless of your answer to the previous question we now want to estimate the probability
P(A) based on the n = 300 trials. From the n = 300 trials we count that in 120 of these the
outcome was A and in the remaining 180 trials the outcome was B. Provide a 95% confidence
interval for the probability P(A):
1  [0.33, 0.48]
2*  [0.35, 0.46]
3  [0.35, 0.42]
14
4  [0.31, 0.53]
5  [0.29, 0.54]
----------------------------------- FACIT-BEGIN -----------------------------------
Using the inbuilt function in R the results is
prop.test(120, 300, correct=FALSE)
##
## 1-sample proportions test without continuity correction
##
## data: 120 out of 300, null probability 0.5
## X-squared = 12, df = 1, p-value = 0.000532
## alternative hypothesis: true p is not equal to 0.5
## 95 percent confidence interval:
## 0.3461652 0.4563634
## sample estimates:
## p
## 0.4
whereas using the formula in method ?? gives a slightly different result is obtained
n <- 300
x <- 120
phat <- x/n
phat + c(-1,1) * qnorm(p=0.975) * sqrt(phat*(1-phat)/n)
## [1] 0.3445638 0.4554362
This is due to a numerical rounding by R and can occur sometimes. The answer is in any case
closest to the answer marked correct [0.35, 0.46].
------------------------------------ FACIT-END ------------------------------------
Continues on page 16
15
Exercise VII
An engineer is examining the quality in a batch of raw materials. The quality demand is that
the purity of the raw material is at least 90%. The engineer takes a sample of 10 independent
measurements from the batch and saves the measured values (in %) of the purity in a vector x.
He then runs the following code in R
> x <- c(90.6, 90.3, 88.9, 87.5, 87.6, 88.1, 87.5, 88, 88, 89.6)
> n <- length(x)
> tobs <- (mean(x) - 90) / (sd(x) / sqrt(n))
> pt(tobs, df=n-1)
Which yields the following output
[1] 0.002279236
`,`
Based on the calculations listed above, and assuming that the measurements of the purity
are normally distributed and applying a significance level of α = 0.05, what can the engineer
conclude?
1  The engineer can conclude that the purity of the raw material is at least 88.6%
2  The engineer can conclude that the mean purity of the raw material is at most 88.6%
3  The engineer has with probability 99.7% shown that the mean purity of the raw material
is 90%
4  The engineer can assume that the mean purity of the raw material is 90%
5*  The engineer can reject that the mean purity of the raw material is 90%
----------------------------------- FACIT-BEGIN -----------------------------------
We can see from the way that tobs is calculated that the null hypothesis is that the µ = 90.
Since the p-value is 0.0046 and thus much lower than α = 0.05. This leads to the conclusion
that the null hypothesis, that the mean purity is 90%, must be rejected. See method ??
------------------------------------ FACIT-END ------------------------------------
Continues on page 17
16
Exercise VIII
We consider a random variable W with density function f(w) = 1
9
√
2π
e
−
(w−30)2
162 .
The density function is shown in the figure below, where the probability
P(30 < W < 33) is shown as the shaded area.
0 10 20 30 40 50 60
0.00 0.01 0.02 0.03 0.04
w
f(w)
`,`
Calculate the probability P(30 < W < 33):
1  0.09
2*  0.13
3  0.24
4  0.34
5  0.84
----------------------------------- FACIT-BEGIN -----------------------------------
The answer is obtained from recognizing the the formula for the probability density function
(pdf) for the normal distribution in definition ??
f(w) = 1
σ
√
2π
e
−
(w−µ)
2
2·σ2
17
and thus to find the mean µ = 30 and variance σ = 9. These are then used to obtain
P(30 < W < 33) = P(X < 33) − P(X < 30)
in R
pnorm(33, mean=30, sd=9) - pnorm(30, mean=30, sd=9)
## [1] 0.1305587
SINCE in the original exam the plot was which indeed was wrong, it was of the normal distri15 20 25 30 35 40 45
0.00 0.02 0.04 0.06 0.08 0.10 0.12
w
f(w)
bution with mean µ = 30 and variance σ = 3
pnorm(33, mean=30, sd=3) - pnorm(30, mean=30, sd=3)
## [1] 0.3413447
then the Answer 4 is also counted as correct!
------------------------------------ FACIT-END ------------------------------------
18
Continues on page 19
19
`,`
We consider a situation where we take 3 different samples denoted A, B, and C. All three
samples are from the population characterized by the density f(w) = 1
9
√
2π
e
−
(w−30)2
162 as in the
previous question.
Sample A is of size nA = 10 and the estimated mean is denoted ˆµA. Sample B is of size
nB = 30 and the estimated mean is denoted ˆµB. Sample C is of size nC = 100 and the
estimated mean is denoted ˆµC.
The question is now whether the sample mean will exceed the value 33, even when the population mean is equal to 30.
Which statement is correct?
1*  P(ˆµA ≥ 33) > P(ˆµB ≥ 33)
2  P(ˆµC ≥ 33) > P(ˆµA ≥ 33)
3  P(ˆµC ≥ 33) = P(ˆµB ≥ 33)
4  P(ˆµA ≥ 33) = P(ˆµB ≥ 33) · P(ˆµC ≥ 33)
5  P(ˆµA ≥ 33) = 1
2
P(ˆµB ≥ 33)
----------------------------------- FACIT-BEGIN -----------------------------------
Lets go through the statements:
1. TRUE statement. The ˆµ is the sample mean, which we know follow the distribution
µˆ ∼ N(µ, σ2/n), so we get the following
µˆA ∼ N(30, 81/10)
µˆB ∼ N(30, 81/30)
µˆC ∼ N(30, 81/100)
and we can actually then realize, that the probability of getting a an outcome above the
same value, must be higher for XA than the two others, since its pdf has higher variance
than the others. In R we can check it by:
## P(X_A >= 33)
(1-pnorm(q=33, mean=30, sd=sqrt(81/10)))
## [1] 0.1459203
## P(X_B >= 33)
(1-pnorm(q=33, mean=30, sd=sqrt(81/30)))
## [1] 0.03394458
20
2. FALSE statement. Following same argument as above
3. FALSE statement. Since the variance is different, then they are not equal
4. FALSE statement. Be sure by checking the product in R:
(1-pnorm(q=33, mean=30, sd=sqrt(81/30))) *
(1-pnorm(q=33, mean=30, sd=sqrt(81/100)))
## [1] 1.456427e-05
5. FALSE statement. Be sure by checking the product in R:
0.5 * (1-pnorm(q=33, mean=30, sd=sqrt(81/30)))
## [1] 0.01697229
------------------------------------ FACIT-END ------------------------------------
Continues on page 22
21
Exercise IX
The yield from a chemical process, Yi
, is assumed to depend linearly on the temperature, ti
,
measured in degrees. In order to achieve insight about this relation, an experiment has been
conducted where n = 50 pairwise measurements of Yi and ti has been taken. It is assumed that
the following model can give a reasonable description of the relation
Yi = β0 + β1 · ti + εi
.
The residuals in this model are assumed independent and normally distributed with constant
variance, i.e. εi ∼ N(0, σ2
ε
). Relevant output from the analysis in R is given below:
Call:
lm(formula = y ~ t)
Residuals:
Min 1Q Median 3Q Max
-5.0816 -1.4994 -0.2493 1.5175 4.8506
Coefficients:
Estimate Std. Error t value Pr(>|t|)
(Intercept) 65.4919 2.7757 23.595 <2e-16 ***
t 0.1637 0.1103 1.485 0.144
---
Residual standard error: 2.296 on 48 degrees of freedom
Multiple R-squared: 0.04392,Adjusted R-squared: 0.024
F-statistic: 2.205 on 1 and 48 DF, p-value: 0.1441
`,`
Which of the following statements is correct when the significance level α = 0.05 is applied?
1  The yield increases by 16.37% when the temperature increase one degree
2*  There is no significant linear relation between temperature and yield
3  The test statistics for no effect of temperature on yield (i.e. the null hypothesis H0 : β1 =
0) is 23.595
4  A 95% confidence interval for the effect of temperature, β1, is [-0.132027, 0.4594821]
5  The correlation between temperature and yield is 0.04392
22
----------------------------------- FACIT-BEGIN -----------------------------------
Lets go through the answers one by one:
1. FALSE statement. The yield is estimated to increase 0.1637 units (we are not informed
about the units) per degree, which is not the same as 16.37% (increasing some proportion
per degree, would also lead to an exponential relation, not linear)
2. TRUE statement. The test of the null hypothesis
H0 : β1 = 0
leads to a p-value of 0.144, which is not below the significance level α = 0.05 and since
this is equivalent to testing for correlation equal to zero
H0 : ρ = 0
there is not found a significant linear relation between the yield and the temperature
3. FALSE statement. Since, the test statistic for no effect is 1.485
4. FALSE statement. The lower limit of the CI is 0.1637 − 1.96 ∗ 0.1103 = −0.052 and the
upper is 0.1637 + 1.96 ∗ 0.1103 = 0.380
5. FALSE statement. The correlation is √
r
2 =
√
0.04392 = 0.21
------------------------------------ FACIT-END ------------------------------------
Continues on page 24
23
`,`
We continue with the exercise from the previous page. It turns out that the pH of the process
may influence the yield, and since pH has been measured, it is decided to include it into the
model, which in its extended form becomes:
Yi = β0 + β1 · ti + β2 · pH i + εi
.
Estimation of the model parameters gives the following output in R:
Call:
lm(formula = y ~ t + pH)
Residuals:
Min 1Q Median 3Q Max
-3.7253 -1.2818 -0.2978 1.0724 4.4488
Coefficients:
Estimate Std. Error t value Pr(>|t|)
(Intercept) 49.46756 4.09799 12.071 5.25e-16 ***
t 0.24113 0.09315 2.589 0.0128 *
pH 2.37090 0.50097 4.733 2.06e-05 ***
---
Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
Residual standard error: 1.91 on 47 degrees of freedom
Multiple R-squared: 0.3525,Adjusted R-squared: 0.3249
F-statistic: 12.79 on 2 and 47 DF, p-value: 3.667e-05
Give estimates for the model parameters, i.e. β0, β1, β2 and σ
2
ε
1  (βˆ
0, βˆ
1, βˆ
2, σˆ
2
ε
) = (4.09799, 0.24113, 2.37090, 0.3525)
2*  (βˆ
0, βˆ
1, βˆ
2, σˆ
2
ε
) = (49.46756, 0.24113, 2.37090, 1.912
)
3  (βˆ
0, βˆ
1, βˆ
2, σˆ
2
ε
) = (49.46756, 0.24113, 2.37090, 1.91 · 47)
4  (βˆ
0, βˆ
1, βˆ
2, σˆ
2
ε
) = (4.09799, 0.09315, 0.50097, 1.91 · 47)
5  (βˆ
0, βˆ
1, βˆ
2, σˆ
2
ε
) = (2.37090, 0.50097, 4.733 , 1.91)
----------------------------------- FACIT-BEGIN -----------------------------------
The estimates are read directly from the printed output.
24
------------------------------------ FACIT-END ------------------------------------
Continues on page 25
25
`,`
We continue with the exercise from the previous page and the model
Yi = β0 + β1 · ti + β2 · pHi + εi
.
Provide a 95% confidence interval for the effect on yield when pH increases one unit:
1  0.24113 ± 2.01174 · 0.09315
2*  2.37090 ± 2.01174 · 0.50097
3  (49.46756 + 0.24113 + 2.37090) ± 2.01174 · (4.09799 + 0.09315 + 0.50097)
4  2.37090 ± 0.509920 · 0.50097
5  (49.46756 + 0.24113 + 2.37090) ± 0.509920 · 0.50097
----------------------------------- FACIT-BEGIN -----------------------------------
See Method ??. The confidence interval for the effect of pH is found inserting the printed
values into
βˆ
2 ± t1−α/2 · σˆβ2
using the t-distribution with n − (p + 1) = 47 degrees of freedom to find the quantile t1−α/2:
qt(p=0.975, df=47)
## [1] 2.011741
------------------------------------ FACIT-END ------------------------------------
Exercise X
Assume there exists a dice with 10 sides and where the probability for each of the 10 outcomes,
1, 2, . . . , 10, is the same. Consider the discrete random variable X with density f(x) = 0.1 for
x ∈ (1, 2, . . . , 10).
`,`
Give the mean value of X:
26
1  1
(10−1)
P10
i=1 xi = 6.11
2  1
(10−6.11)
P10
i=1 |xi − 6.11| = 6.48
3  1
(10)
P10
i=1(xi − 6.11)2 = 8.62
4
P10
i=1
10−1
10 xi
· 0.1 = 4.95
5*
P10
i=1 xi
· 0.1 = 5.50
----------------------------------- FACIT-BEGIN -----------------------------------
See Definition ??. We use the formula for calculating the mean value of a discrete random
variable
Xn
i=1
xif(xi)
and insert the values. In R:
sum(1:10*0.1)
## [1] 5.5
------------------------------------ FACIT-END ------------------------------------
Continues on page 28
27
Exercise XI
The yield of a process is µ = 60 mg/l. Certain changes to the process are being planed and it
is desirable to be able to prove an effect on the mean yield if the change is at least 5 mg/l (i.e.
a two-sided test).
An engineer is now going to plan an experiment to evaluate the effect of the process changes.
He wants to decide how large a sample is needed. The sample size has to be large enough to
detect the relevant effect (5 mg/l) with a power of 0.8 when applying a significance level of
α = 0.05. It can be assumed that the standard deviation is σ = 10 mg/l.
`,`
Based on the information above, and by applying the function power.t.test in R, one concludes that, if an equal number of measurements are taken, then the minimum number of
measurements n needed becomes:
1  n ' 256 measurements
2  n ' 128 measurements
3  n ' 64 measurements
4*  n ' 34 measurements
5  n ' 27 measurements
----------------------------------- FACIT-BEGIN -----------------------------------
Based on the given information the planned test is a one-sample test, since it is not stated that
a sample should be taken before the change, only that the yield before is µ = 60 mg/l.
power.t.test(delta=5, sd=10, sig.level=0.05, power=0.8, type="one.sample")
##
## One-sample t test power calculation
##
## n = 33.3672
## delta = 5
## sd = 10
## sig.level = 0.05
## power = 0.8
## alternative = two.sided
Rounding up to n ' 34 measurements.
28
Since, it is not completely clear, that the it should not be a two-sample setup – one could argue
that a nothing in the information given prevents it from being a two-sample test – then Answer
3 is also taken as correct, since:
power.t.test(delta=5, sd=10, sig.level=0.05, power=0.8, type="two.sample")
##
## Two-sample t test power calculation
##
## n = 63.76576
## delta = 5
## sd = 10
## sig.level = 0.05
## power = 0.8
## alternative = two.sided
##
## NOTE: n is number in *each* group
Further, since it is also not specified that n is the number of measurements is in each group
(and not the total), then Answer 2 is also taken as correct.
------------------------------------ FACIT-END ------------------------------------
Continues on page 30
29
Exercise XII
In a study the aim is to investigate the possible cholesterol lowering effect of a product. 9 test
persons had their cholesterol level measured (denoted x1). After 3 months, while using the
product, the same 9 test persons had their cholesterol level measured again (denoted x2). Data
is shown in the table below:
Person 1 2 3 4 5 6 7 8 9
x1 63.5 66.7 59.2 57.4 63.9 63.2 60.7 62.6 63.3
x2 51.3 51.9 57.8 50.2 54.6 43.3 51.2 40.4 52.2
The following code is now run in R, in order to test whether the change over time can be
assumed to be zero (H0 : δ = 0):
x1 <- c(63.5, 66.7, 59.2, 57.4, 63.9, 63.2, 60.7, 62.6, 63.3)
x2 <- c(51.3, 51.9, 57.8, 50.2, 54.6, 43.3, 51.2, 40.4, 52.2)
The output from the standard statistical analysis is given below. Please note that some numbers
in the standard output have been replaced by the letters A, B and C.
t = -5.6354, df = A, p-value = B
alternative hypothesis: true difference in means is not equal to 0
95 percent confidence interval:
-16.847799 C
sample estimates:
mean of the differences
-11.95556
`,`
What conclusion can be made when applying a significance level of α = 0.05?
1  We can show an effect since µD = −11.95556
2  We can not show an effect since the upper limit of the confidence interval is 7.063312
3  We can not show an effect since the lower limit of the confidence interval is -7.063312
4*  We can show an effect since the p-value is 4.897 · 10−4
5  We can show an effect since the p-value is 2.394 · 10−4
30
----------------------------------- FACIT-BEGIN -----------------------------------
The standard statistical test for this setup is a paired two-sample t-test. The R output is from
t.test(), and the easiest way to solve this is by copying and running
x1 <- c(63.5, 66.7, 59.2, 57.4, 63.9, 63.2, 60.7, 62.6, 63.3)
x2 <- c(51.3, 51.9, 57.8, 50.2, 54.6, 43.3, 51.2, 40.4, 52.2)
## The call is then either "t.test(x2, x1, paired=TRUE)" or
t.test(x2-x1)
##
## One Sample t-test
##
## data: x2 - x1
## t = -5.6354, df = 8, p-value = 0.0004897
## alternative hypothesis: true mean is not equal to 0
## 95 percent confidence interval:
## -16.847799 -7.063312
## sample estimates:
## mean of x
## -11.95556
and from the p-value we can find the correct answer. See section ?? for more examples.
------------------------------------ FACIT-END ------------------------------------
Continues on page 32
31
Exercise XIII
A biologist is interested in examining the effect of 4 different growth inhibitors, denoted V1,
V2, V3 og V4. The 4 growth inhibitors are added to samples from the same cell line and growth
after one week is measured Yij (number of cells per cm2
). 8 replicates are made for each growth
inhibitor, i.e. we have a total of 32 measurements. As the measurements can be assumed
normally distributed, it is chosen to apply the following analysis of variance model
Yij = µ + αi + εij .
In this model αi denotes the effect of growth inhibitor i (i = 1, 2, 3, 4), µ is the overall average
εij are the errors, assumed independent and normally distributed with mean zero and standard
deviation σε.
An analysis of variance is performed for the above model and the output is given below. Please
note that the output is incomplete as some numbers are replaced by the symbols A, B and C.
Analysis of Variance Table
Response: growth
Df Sum Sq Mean Sq F value Pr(>F)
treatment A 281.07 B C 0.0001409 ***
Residuals 28 268.46 9.588
`,`
Provide the usual test statistics (denoted by C) in order to test for equal mean effect of the 4
growth inhibitors
1*  9.77
2  7.23
3  2.95
4  4.57
5  16.11
----------------------------------- FACIT-BEGIN -----------------------------------
As stated in Theorem ??, we can calculate the observed test statistic by
Fobs =
SS(Tr )/(k − 1)
SSE/(n − k)
=
281.07/(4 − 1)
268.46/(32 − 4) = 9.77,
where
32
• SS(Tr ) is the variance explained by the effect of the treatment
• SSE is the variance remaining after the model (sum of squared error)
• n is the total number of observations
• k is the number of groups
------------------------------------ FACIT-END ------------------------------------
Continues on page 34
33
`,`
We now want to calculate a post hoc 95% confidence interval for a difference in mean between
growth inhibitor V1 and V2, here denoted I0.95(V1 − V2). From the experiment it is known that
the estimated mean difference between V1 and V2 is 4.5. State the interval I0.95(V1 − V2):
1  I0.95(V1 − V2) = 4.5 ± 2.048 ·
9.588
12 ·
√
28
2*  I0.95(V1 − V2) = 4.5 ± 2.048 ·
√
9.588 ·
p
2/8
3  I0.95(V1 − V2) = 4.5 ± 2.306 ·
√
√
9.588
12
4  I0.95(V1 − V2) = 4.5 ± 2.306 · 9.5882
·
p
1/8
5  I0.95(V1 − V2) = 4.5 ± 1.960 ·
9
√.588
8
----------------------------------- FACIT-BEGIN -----------------------------------
See method ??. The post hoc confidence interval for the difference is
y¯i − y¯j ± t1−α/2
s
SSE
n − k

1
ni
+
1
nj

.
So we use the t-distribution with n − k = 32 − 4 = 28 degrees of freedom
qt(p=0.975, df=28)
## [1] 2.048407
and insert the values
4.5 ± 2.048 ·
s
268.46
28 
1
8
+
1
8

,
which we cannot directly find among the answers, so we shorten it
4.5 ± 2.048 ·
s
9.588 
2
8

,
and finally find the answer
4.5 ± 2.048 ·
√
9.588 ·
p
2/8.
------------------------------------ FACIT-END ------------------------------------
34
Exercise XIV
We consider a continuous random variable random, where the well-known cumulative distribution function F(x) is given by P(X ≤ x) = 1 − e
−x/2
, where x > 0.
`,`
Provide the mean of X:
1  1
2
2  1
3*  2
4  3
2
5  4
----------------------------------- FACIT-BEGIN -----------------------------------
It is recognized as the cdf of the exponential distribution (Definition ??), which is verified by
Z x
0
λeλydy =

−e
−λy + c
x
0
= −e
−λx + e
0 = 1 − e
−λx
and it can be seen that λ =
1
2
. Using the formula for the mean of an exponential distribution
(Theorem ??)
µ =
1
λ
= 2.
------------------------------------ FACIT-END ------------------------------------
Continues on page 36
35
Exercise XV
A biologist is examining the bio-diversity within an area and has measured the number of
different type of plants per 10 m2
in different places in the area. She has obtained a total of
30 independent measurements, yi
, and these are in in the vector Yobs in R.
`,`
The biologist would like to estimate a 95% confidence interval for the coefficient of variation for
the bio-diversity (number of different type of plants per 10 m2
) by applying the non-parametric
bootstrap. Which of the following suggestions in R is most suitable to achieve this?
1  samples = replicate(10000,rnorm(30,mean(Yobs),sd(Yobs))
results = apply(samples,2,sd)/apply(samples,2,mean)
quantile(results, c(0.025,0.975))
2  samples = replicate(10000,sample(Yobs,replace=TRUE))
results = apply(samples,2,var)/apply(samples,2,sd)
quantile(results, c(0.025,0.975))
3  samples = replicate(10000,rnorm(30,mean(Yobs),sd(Yobs))
results = apply(samples,2,var)/apply(samples,2,median)
quantile(results, c(0.025,0.975))
4  samples = replicate(10000,sample(Yobs,replace=FALSE))
results = apply(samples,2,sd)/apply(samples,2,mean)
quantile(results, c(0.025,0.975))
5*  samples = replicate(10000,sample(Yobs,replace=TRUE))
results = apply(samples,2,sd)/apply(samples,2,mean)
quantile(results, c(0.025,0.975))
----------------------------------- FACIT-BEGIN -----------------------------------
In the code in Answer 1 and 3 the samples are simulated using rnorm(), hence a normal
distribution is assumed and it is not non-parametric bootstrapping (but parametric).
In Answer 2 it is not the coefficient of variation which is calculated by
apply(samples,2,var)/apply(samples,2,sd),
which it is in Answer 4 and 5 by
apply(samples,2,sd)/apply(samples,2,mean).
The difference between 4 and 5 is that in Answer 4 the samples are drawn without replacement
sample(Yobs,replace=FALSE),
which is wrong, where in Answer 5 the samples are drawn correctly with replacement
sample(Yobs,replace=TRUE).
------------------------------------ FACIT-END ------------------------------------
Continues on page 37
36
Exercise XVI
In a study 178 men and 180 women were asked to answer whom of 2 political candidates, A or
B, they preferred. Alternatively, they could answer ”none of the two”. The distribution of the
answers is shown in the figure below.
40
78
60
55
85
40
0
20
40
60
80
men women
sex
count
choice
Candidate A
Candidate B
None of the two
Continues on page 38
37
`,`
It is seen from the figure that we observe that 85 out of the 180 women prefer Candidate B. If
we can assume the same distribution of answers by gender, how many women out of the 180
would we expect to prefer Candidate B?
1  163
358 ·
95
358 · 358
2  100
358 ·
223
358 · 358
3  95
358 ·
190
358 · 358
4*  163
358 ·
180
358 · 358
5  95
358 ·
180
358 · 358
----------------------------------- FACIT-BEGIN -----------------------------------
The total number of respondents are n = 180+178 = 358 and if we assume the same distribution
of answers by gender, i.e. the under the hypothesis that the proportion of men and women
prefering B is equal
H0 : pmen,B = pwomen,B = p,
then
p =
”Total number for B”
”Total number” =
78 + 85
358
=
163
358
.
It is then simply this fraction we expect out of the total number of women
163
358
· 180,
which is then expressed a little longer by
163
358
·
180
358
· 358.
------------------------------------ FACIT-END ------------------------------------
`,`
Provide the usual test statistics when you want to conduct the test of whether the distribution
of answers is the same for men and women:
1  χ
2
obs = 5.9915
38
2*  χ
2
obs = 6.6581
3  χ
2
obs = 16.212
4  χ
2
obs = 8.3836
5  χ
2
obs = 4.5067
----------------------------------- FACIT-BEGIN -----------------------------------
Maybe the easiest is to copy example ?? from the book of testing multiple proportions
prop <- matrix(c(60, 78, 40, 40, 85, 55), ncol = 3, byrow = TRUE)
rownames(prop) <- c("Men", "Women")
colnames(prop) <- c("A", "B", "None")
prop
## A B None
## Men 60 78 40
## Women 40 85 55
chisq.test(prop, correct=FALSE)
##
## Pearson's Chi-squared test
##
## data: prop
## X-squared = 6.6581, df = 2, p-value = 0.03583
------------------------------------ FACIT-END ------------------------------------
Continues on page 40
39
Exercise XVII
Cloud seeding is a form of weather modification that can be used to increase the amount of
precipitation that falls from the clouds, by dispersing substances (small particles) e.g. aluminiumoxid into the clouds to modify their development.
In an experiment the aim was to study the effect of cloud seeding by using a new type of
particles. The amount of precipitation (mm precipitation per day) for 35 days with cloud
seeding using the new particles is denoted Xi
, (i = 1, 2, . . . , 35). This was compared to the
amount of precipitation on 30 days without cloud seeding, denoted Yj
, (j = 1, 2, . . . , 30).
Measurements were only taken on days where there was sufficient humidity in the air to make
the experiment relevant. Data from the experiment is shown in the figure below.
●
●
●
●
●
4
8
12
16
X (particle) Y (control)
Experiment
Precipitation (mm)
Continues on page 41
40
We now want to analyze the data described on the previous page using R. Data xi
is stored in
the vector x and data yj
is stored in the vector y, and the following code has been run:
k <- 10^4
resultX <- replicate(k, sample(x, replace = TRUE))
resultY <- replicate(k, sample(y, replace = TRUE))
result <- apply(resultX, 2, median) - apply(resultY, 2, median)
quantile(result, c(0.5, 0.025,0.975))
Which gives the result
50% 2.5% 97.5%
1.6283069 0.2843492 2.4233546
`,`
If we apply a significance level of α = 0.05 what can then be concluded?
1*  The median for X is significantly higher than the median for Y
2  The median for X is 62.8% higher than the median for Y
3  Precipitation for X is between 28.4% and 142.3% higher than precipitation for Y
4  The mean precipitation can be assumed equal for the two methods
5  The medianen for Y is [0.28; 2.42] higher than the median for X
----------------------------------- FACIT-BEGIN -----------------------------------
In the R code a 95% non-parametric bootstrap confidence interval for the difference in median
is calculated, and since 0 is not contained in the interval, then the hypothesis
H0 : q0.5,X = q0.5,Y
must be rejected on significance level α = 0.05, thus concluded that
H1 : q0.5,X 6= q0.5,Y
and further, since X − Y was calculated and the interval is on the positive side, then it can be
concluded that q0.5,X > q0.5,Y .
------------------------------------ FACIT-END ------------------------------------
Continues on page 42
41
`,`
In a different experiment using cloud seeding a different kind of particles were examined. Also
in this experiment the amount of precipitation was compared when the particles were used to a
situation with no use of particles. In this study, however, it was decided to log transform (the
natural logarithm) the data before comparing the groups. By transforming the data it can be
assumed that data in the two groups follows a normal distribution. The data is summarized in
the table below (unit is log mm precipitation).
Particles, X Control, Y
(log mm precipitation) (log mm precipitation)
Estimated mean µˆX = 1.573 µˆY = 1.314
Estimated variance σˆ
2
X = 0.333 σˆ
2
Y = 0.171
Number of observations nX = 35 nY = 30
We now want to test whether the means of the 2 groups can be assumed equal, i.e.
H0 : µX = µY
H1 : µX 6= µY
It is given that the usual test statistics assuming the null hypothesis becomes 2.0958 with 61.19
degrees of freedom. State the p-value and conclusion when a significance level of α = 0.05 is
applied:
1  p-value ' 0.82 i.e. H0 is accepted
2  p-value ' 0.41 i.e. H0 is rejected
3  p-value ' 0.21 i.e. H0 is accepted
4  p-value ' 0.10 i.e. H0 is rejected
5*  p-value < 0.05 i.e. H0 is rejected
----------------------------------- FACIT-BEGIN -----------------------------------
This is a two-sample t-test and we get the information we need from tobs = 2.0958 and degrees
of freedom is 61.19, so the p-value is calculated by
2 * (1-pt(abs(2.0958), df=61.19))
## [1] 0.04024393
which is lower than 0.05, so we reject the null hypothesis.
42
------------------------------------ FACIT-END ------------------------------------
Continues on page 43
43
Exercise XVIII
At a Christmas marked there is a lottery. 24 balls are placed in bowl. On each of 4 balls there
is a picture of a star. On each of the remaining 20 balls there is a picture of an elf. The lottery
is now played so that 2 balls are drawn without replacement from the bowl. If both balls show
a picture of a star then you have won a prize!
`,`
You participate in the game once. Provide the probability of winning a prize:
1  80
276
2  56
276
3  40
276
4  16
276
5*  6
276
----------------------------------- FACIT-BEGIN -----------------------------------
This is drawing without replacement, hence we must use the hypergeometric distribution (Chapter ??). However, to get most easily to the answer in the presented form, we can use the basic
definition of probability
P(success) = x
n
,
where x is the number of successes in a population of size n. We need possible successful
combinations, where a ball with a star is drawn. In the first draw one out of the four must be
drawn and in the second draw one out of the three remaining must be drawn, thus
x = 4 · 3 = 12.
The number of elements in the population (of possible draws) is
n = 24 · 23 = 552,
since in the first draw there are 24 balls and in the second there are one less. Put together this
gives
12
552
=
6
276
.
Alternatively, the x number of successful combinations could be calculated by
44
dhyper(x=2, m=4, n=20, k=2)
## [1] 0.02173913
which multiplied with the population size gives x
dhyper(x=2, m=4, n=20, k=2) * (24*23)
## [1] 12
------------------------------------ FACIT-END ------------------------------------
The exam is finished. Have a great Christmas vacation!
45`]