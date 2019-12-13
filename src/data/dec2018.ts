export default [`
In the analysis of a single sample, 10 measurements are assumed to be independent and sampled
from a normal distribution with mean µ and variance σ
2
. The sample mean is ¯x = 0.57, while
the sample standard deviation is s = 0.32.
`,`
Which of the following is a standard 99% confidence interval for the theoretical standard deviation σ?
1*  [0.20, 0.73]
2  0.57 ± 1.96 · 0.32
3  [0.22, 0.58]
4  [0.05, 0.34]
5  [0.03, 0.53]
----------------------------------- FACIT-BEGIN -----------------------------------
See Method 3.19. Here, n = 10 and α = 0.01, so the left and right endpoints are, respectively,
sqrt( (10-1)*0.32^2/qchisq(0.995, df = 9) )
## [1] 0.1976575
sqrt( (10-1)*0.32^2/qchisq(0.005, df = 9) )
## [1] 0.7288361
which result in the interval [0.20, 0.73] when rounded to two decimals.
------------------------------------ FACIT-END ------------------------------------
`,`
2
We would like to determine the median of X1/X2, when X1 and X2 are independent stochastic
variables, which are both normal distributed with mean 1 and variance 1. The distribution
of the ratio is not trivial; therefore we resort to simulation to determine an estimate and a
confidence interval for the median of the distribution of X1/X2.
`,`
First, 10000 medians are simulated, each being the median of 10000 ratios. We store these in
R in the vector medians:
ratio <- replicate(10000, rnorm(10000, mean = 1)/rnorm(10000, mean = 1))
medians <- apply(ratio, 2, median)
Subsequently, the sample mean and a series of percentiles are calculated for these 10000 medians:
mean(medians)
## [1] 0.6193
quantile(medians, c(0.005, 0.025, 0.05, 0.5, 0.95, 0.975, 0.995), type = 2)
## 0.5% 2.5% 5% 50% 95% 97.5% 99.5%
## 0.5873 0.5949 0.5989 0.6193 0.6402 0.6443 0.6515
Which of the following choices yields an estimate for the median of X1/X2 and a 95% confidence
interval for this median?
1  Estimate: 1.
95% confidence interval: [1 − 1.96 · 0.6193, 1 + 1.96 · 0.6193].
2*  Estimate: 0.6193.
95% confidence interval: [0.5949, 0.6443].
3  Estimate: 1.
95% confidence interval: [1 − 0.5949, 1 + 0.6443].
4  Estimate: 0.6193.
95% confidence interval: [0.5873, 0.6515].
5  Estimate: 0.6193.
95% confidence interval: [0.6193 − 0.5949, 0.6193 + 0.5949].
----------------------------------- FACIT-BEGIN -----------------------------------
3
The estimate is the average of the simulated medians, i.e. the estimated median is 0.6193. The
left and right endpoints of the 95% confidence interval are, respectively, the 2.5% and 97.5%
quantiles of the simulated medians, so the confidence interval becomes [0.5949, 0.6443].
------------------------------------ FACIT-END ------------------------------------
`,`
A normal distributed population has mean µ = 100 and standard deviation σ = 15.
`,`
In a random draw, what is the probability of obtaining an observation below 90?
1*  0.252
2  0.482
3  0.518
4  0.631
5  0.748
----------------------------------- FACIT-BEGIN -----------------------------------
Let X ∼ N(100, 152
). Then, we may find P(X < 90) = P(X ≤ 90) as:
pnorm(90, mean = 100, sd = 15)
## [1] 0.2524925
------------------------------------ FACIT-END ------------------------------------
`,`
If a random sample of n = 10 independent observations is drawn from the population, what is
the probability that the sample mean is below 90?
1  0.000783
2*  0.0175
4
3  0.146
4  0.252
5  0.482
----------------------------------- FACIT-BEGIN -----------------------------------
Let X¯ denote the sample mean, i.e. the average of 10 independent random variables X1, . . . , X10,
each with the same distribution as X. Use the mean and variance identities for linear combinations of independent random variables (Theorem 2.54) to compute the mean
E

X¯

= E
1
10
X
10
i=1
Xi
!
=
1
10
X
10
i=1
E(Xi) = 1
10
· 10 · µ = µ = 100
and the variance
V

X¯

= V
1
10
X
10
i=1
Xi
!
=
1
102
X
10
i=1
V(Xi) = 1
102
· 10 · σ
2 =
1
10
152 = 22.5 .
Now, P(X <¯ 90) = P(X¯ ≤ 90) may be found as
pnorm(90, mean = 100, sd = sqrt(22.5))
## [1] 0.01750749
------------------------------------ FACIT-END ------------------------------------
`,`
Suppose that a random sample of n independent observations is repeatedly drawn from the
population, and that the sample variance S
2
is calculated in each repetition. What holds true
for S
2
?
1  n
2S
2
is F-distributed with n − 1 and n − 2 degrees of freedom.
2  S
2
is χ
2
-distributed with n − 1 degrees of freedom.
3*  (n − 1)S
2/σ2
is χ
2
-distributed with n − 1 degrees of freedom.
4  S
2
is normal distributed with mean µ and variance σ
2/n2
.
5  S
2 has the same distribution as (Z − σ
2
)/n, where Z is standard normal distributed.
----------------------------------- FACIT-BEGIN -----------------------------------
See Section 3.1.6 from beginning and after one page you find the result, that the sampling
distribution of the sample variance transformed by multiplying with (n − 1) and dividing with
σ
2
is χ
2
-distributed with n − 1 degrees of freedom. It is stated in Equation 3-17.
------------------------------------ FACIT-END ------------------------------------
`,`
10 people have had their daily energy intake measured (in kJ). The measurements in the sample
are shown in the table below:
Energy intake (kJ): 8230 5470 7515 5260 6390 6180 6515 6805 7515 5640
`,`
What is the median of the sample?
1  6390
2  6515
3  (8230+5260)/2
4  (6390+6180)/2
5*  (6390+6515)/2
----------------------------------- FACIT-BEGIN -----------------------------------
You can rather easily copy from the pdf into an R script and add some commas between the
values, and then:
# Read data into R and sort:
x <- sort(c(8230, 5470, 7515, 5260, 6390, 6180, 6515, 6805, 7515, 5640))
x
## [1] 5260 5470 5640 6180 6390 6515 6805 7515 7515 8230
As there are 10 observations, the median is computed as the mean of observations number 5
and 6 after sorting:
(6390 + 6515)
2
= 6452.5
6
The result may be verified using R:
median(x)
## [1] 6452.5
or:
quantile(x, prob=0.5, type=2)
## 50%
## 6452.5
------------------------------------ FACIT-END ------------------------------------
`,`
The sample mean is ¯x = 6552, while the sample standard deviation is s = 975.94. It is
assumed that the daily energy intake may be modelled by a normal distribution, and that the
observations are independent and identically distributed. What is the p-value for the t-test
that tests the hypothesis that the mean daily energy intake is 7725 kJ?
1  0.4
2  0.06
3  0.04
4  0.006
5*  0.004
----------------------------------- FACIT-BEGIN -----------------------------------
See Method 3.23. With ¯x = 6552, s = 975.94 and n = 10, the observed t-test statistic is
calculated as
tobs =
6552 − 7725
975.94/
√
10
= −3.8007989
and the p-value is thus found as
2P(T ≤ tobs) = 2 · 0.0021061 = 0.004 .
P(T ≤ tobs) is found in R as:
7
pt(-3.8007989, 10-1)
## [1] 0.002106097
The in-built function could also be used:
t.test(x, mu=7725)
##
## One Sample t-test
##
## data: x
## t = -3.8008, df = 9, p-value = 0.004212
## alternative hypothesis: true mean is not equal to 7725
## 95 percent confidence interval:
## 5853.853 7250.147
## sample estimates:
## mean of x
## 6552
------------------------------------ FACIT-END ------------------------------------
`,`
A married couple visits the same restaurant several times a month. Typically, they order a
glass of red wine with their food. One day, they decide to complain to the owner. They believe
that one of the waiters pours less wine into the glass than what they pay for. Consequently,
the owner launches an experiment with three of the restaurant’s waiters in order to investigate
how much they pour into wine glasses, when they pour using a rule of thumb. Each of the
three waiters (here anonymized by A, B, and C) were asked to pour red wine into 20 wine
glasses, after which the content in each glass was measured. The data were read into R in two
variables: waiter, indicating which waiter poured the wine, and wine, indicating the amount
of wine in the glass (in mL).
The following code was run in R to analyze the data:
anova(lm(wine ~ waiter))
## Analysis of Variance Table
##
## Response: wine
## Df Sum Sq Mean Sq F value Pr(>F)
## waiter 2 1043.4 521.71 6.9594 0.001976 **
8
## Residuals 57 4273.0 74.97
## ---
## Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
`,`
What may be concluded from the R output above, when a significance level of 5% is used (both
the reasoning and conclusion must be correct)?
1  As the observed F-test statistic is larger than the 0.95 quantile of the F(57, 2)-distribution,
there is a significant difference in the expected amount of wine in glasses poured by the
three different waiters.
2  As the p-value is larger than 5%, there is no significant difference in the expected amount
of wine in glasses poured by the three different waiters.
3  As the sum of squared errors, SSE, is more than four times the size of the treatment sum
of squares, SS(Tr), there is too much noise in the data for it to be meaningful to perform
a one-way analysis of variance.
4*  As the observed F-test statistic is larger than the 0.95 quantile of the F(2, 57)-distribution,
there is a significant difference in the expected amount of wine in glasses poured by the
three different waiters.
5  As the p-value is less than 5%, there is no significant difference in the expected amount
of wine in glasses poured by the three different waiters.
----------------------------------- FACIT-BEGIN -----------------------------------
See Theorem 8.6. From the R-output, it is seen that the relevant F-test statistic is Fobs =
6.9594. The 0.95 quantile of the F(2, 57) distribution may be found using R:
qf(0.95, df1 = 2, df2 = 57)
## [1] 3.158843
------------------------------------ FACIT-END ------------------------------------
`,`
Among other things, the owner would like to make a comparison between waiter A (the young
waiter, whom the couple complained about) and waiter B (an older waiter with many years of
experience in the business). On average, waiter A poured 127 mL of wine into each glass, while
9
waiter B poured 135 mL. Compute the t-test statistic for the post hoc pairwise hypothesis test
which compares the expected amount of wine in glasses poured by waiter A and waiter B.
1  tobs = −0.92
2  tobs = −4.13
3*  tobs = −2.92
4  tobs = −1.07
5  tobs = −0.11
----------------------------------- FACIT-BEGIN -----------------------------------
See Method 8.10. The relevant post hoc t-test statistic is computed as follows:
tobs =
(127 − 135)
q
74.97
1
20 +
1
20  = −2.92
So its like the two-sample t.test, except that the estimate of the error variance is taken from
the model fitted to all the data ˆσ
2 = MSE =
SSE
n−k
, i.e. the pooled variance estimate.
------------------------------------ FACIT-END ------------------------------------
`,`
In addition to the information in the previous question, it is given that, on average, waiter
C poured 136 mL into each glass. Compute the Bonferroni corrected LSD (“least significant
difference”) value used to perform all possible pairwise comparisons between the three waiters,
and determine where there are significant differences (both the LSD value and the conclusion
must be correct). Use the significance level α = 5%.
1  LSD0.05/3 = 7 mL, so there is a significant difference between the expected amount of
wine in glasses poured by waiters B and C, but no significant difference between waiters
A and B or between waiters A and C.
2*  LSD0.05/3 = 7 mL, so there is a significant difference between the expected amount of
wine in glasses poured by waiters A and B as well as between waiters A and C, but no
significant difference between waiters B and C.
3  LSD0.05/3 = 4 mL, so there is a significant difference between the expected amount of wine
in glasses poured by waiters A and B and between waiters A and C, but no significant
difference between waiters B and C.
1
4  LSD0.05/3 = 17 mL, so there is a significant difference between the expected amount
of wine in glasses poured by waiters A and B and between waiters A and C, but no
significant difference between waiters B and C.
5  LSD0.05/3 = 4 mL, so there is a significant difference between the expected amount of
wine in glasses poured by waiters B and C, but no significant difference between waiters
A and B or between waiters A and C.
----------------------------------- FACIT-BEGIN -----------------------------------
See Remark 8.13.
LSD0.05/3 = t1−(0.05/3)/2
p
2 · MSE/20 = 2.466687 ·
p
2 · 74.97/20 = 6.8 ,
where t1−(0.05/3)/2 = t5.95/6 is the 5.95/6 = 0.9916667 quantile of the t-distribution with 60−3 =
57 degrees of freedom, found in R as follows:
qt(5.95/6, df = 60-3)
## [1] 2.466687
So we can use that to determine which of the three waiters will be tested significantly different
in two-sample post hoc comparisons. We have information about the average for each waiter:
x¯A = 127 mL
x¯B = 135 mL
x¯C = 136 mL
from which we can see that A is significantly different from B and C, since their differences are
higher than 7 mL, and that there is no significant difference between B and C.
------------------------------------ FACIT-END ------------------------------------
`,`
A spring is characterized by its spring constant, k. When a spring is stretched, Hooke’s law
states that
F = −k · x ,
where x is the length (in meters) by which the spring is extended, and F is the applied force
(in Newtons). The following six observations were made for a given spring:
1 2 3 4 5 6
x 0.22 0.24 0.26 0.28 0.30 0.32
F -0.51 -0.85 -0.89 -1.59 -1.97 -2.06
11
The observations were read into two vectors in R, x (length) and F (force), respectively, after
which the following model was estimated:
model1 <- lm(F ~ x)
The output from summary(model1) is shown below, where some numbers are replaced by
letters:
##
## Call:
## lm(formula = F ~ x)
##
## Residuals:
## 1 2 3 4 5 6
## -0.04484 -0.04146 0.25365 -0.10667 -0.15758 0.09690
##
## Coefficients:
## Estimate Std. Error t value Pr(>|t|)
## (Intercept) 3.2433 0.5483 A C **
## x -16.8663 2.0148 B D **
## ---
## Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
##
## Residual standard error: 0.1686 on 4 degrees of freedom
## Multiple R-squared: 0.946,Adjusted R-squared: 0.9325
## F-statistic: 70.08 on 1 and 4 DF, p-value: 0.001114
`,`
How may the statistical model corresponding to model1 be described?
1  Yi = β0 + β1xi + εi
, where Yi represents the length by which the spring is extended
when the force xi
is applied, and ε1, . . . , ε6 are assumed to be independent and identically
N(0, σ2
)-distributed.
2  Yi = β1xi + εi
, where Yi represents the force used to extend the spring by the length xi
,
and ε1, . . . , ε6 are assumed to be independent and identically N(0, 1)-distributed.
3  Yi = β1xi + εi
, where Yi represents the length by which the spring is extended when
the force xi
is applied, and ε1, . . . , ε6 are assumed to be independent and identically
N(0, 1)-distributed.
4  Yi = β0 + β1xi + εi
, where Yi represents the length by which the spring is extended
when the force xi
is applied, and ε1, . . . , ε6 are assumed to be independent and identically
N(0, 1)-distributed.
12
5*  Yi = β0 + β1xi + εi
, where Yi represents the force used to extend the spring by the length
xi
, and ε1, . . . , ε6 are assumed to be independent and identically N(0, σ2
)-distributed.
----------------------------------- FACIT-BEGIN -----------------------------------
See Chapter 5. The R-code lm(F ~ x) fits a simple linear regression model, in which F (The
force) is the dependent variable and x (distance) is the explanatory variable. The model is
defined in Equation 5-16 and some more information is given in Remark 5.6.
There are n = 6 observations in the sample, hence since i = 1, . . . , n, there are: six stochastic
variables Yi
, six variables xi and six stochastic variables εi
. The i.i.d. assumption is that the
six errors:
• all come from the same population, which is normal distributed N(0, σ2
)
• are drawn independently from the population
The assumption of independence of the errors is actually not trivial! It can be summed up
in that the conditions, which leads to “unmodelled” variance in Yi
, must be varied randomly.
As an example think of: if another variable (e.g. temperature) actually affected the dependent
variables Yi
, and this variable is not measured and thus not included in the model, then the
experiment should actually be carried out such that this variable is varied randomly. If not
then the sample will be biased and eventually (some of) the conclusions drawn can be affected
(estimates, p-values, ...). This basically means, that one should be very careful when designing
experiments and making sure that the studied phenomena is not affected by some unmeasured
non-random conditions during the experiment...
------------------------------------ FACIT-END ------------------------------------
`,`
Based on the estimated slope in model1, give an estimate of the spring constant, k:
1  0.5483
2  3.2433
3  2.0148
4*  16.8663
5  5.2004
13
----------------------------------- FACIT-BEGIN -----------------------------------
According to Hooke’s law given above, the spring constant corresponds to the estimated slope,
but with the opposite sign, i.e. ˆk = −βˆ
1.
------------------------------------ FACIT-END ------------------------------------
`,`
It is of interest to test whether the model’s intercept is significantly different from zero. Give
the relevant test statistic:
1  -8.371
2*  5.915
3  0.004
4  0.548
5  0.169
----------------------------------- FACIT-BEGIN -----------------------------------
The null hypothesis is H0 : β0 = 0, so β0,0 = 0 in Theorem 5.12. Using the R output (and
standard notation from the book), the observed t-test statistic may be computed as
tobs =
βˆ
0
σˆβ0
=
3.2433
0.5483
= 5.915.
------------------------------------ FACIT-END ------------------------------------
`,`
What is the distribution of the test statistic used to test whether the model’s slope can be
assumed to be zero?
1  A t-distribution with 6 degrees of freedom.
2  A standard normal distribution.
3  An F-distribution with 6 degrees of freedom.
4  A normal distribution with mean zero and standard deviation 0.1686.
14
5*  A t-distribution with 4 degrees of freedom.
----------------------------------- FACIT-BEGIN -----------------------------------
See again Theorem 5.12. Here n = 6, so degrees of freedom is n − 2 = 4.
------------------------------------ FACIT-END ------------------------------------
`,`
In a simple linear regression like the above, the estimators of the intercept and slope parameters
are often correlated. When is this correlation zero?
1  When the standard deviation of the dependent variable is 1.
2  When the slope is estimated as zero.
3*  When the average of the explanatory variable is zero.
4  When the standard deviation of the explanatory variable is 1.
5  When the average of the dependent variable is zero.
----------------------------------- FACIT-BEGIN -----------------------------------
According to Theorem 5.8 Equation 5-29, the covariance, and hence the correlation, between
the intercept and the slope is zero if the sample mean of the explanatory variable, ¯x, is zero.
------------------------------------ FACIT-END ------------------------------------
`,`
In order to investigate whether data from a single sample is log-normal distributed, one could
compare the data to a normal distribution using a qq-plot. If the data is log-normal distributed
there will (typically) be fewer small values and more large values in the data, compared to a
normal distribution with the same mean and variance as the sample.
`,`
Below, four qq-plots are shown in which four different samples with mean 0 and variance 1 are
each compared to a standard normal distribution. Let z0.25 and z0.75 denote the first and third
quartile of the standard normal distribution, respectively, while q0.25 and q0.75 denote the first
15
and third quartile of the sample. The red line is drawn through the points (z0.25, q0.25) and
(z0.75, q0.75). Which sample fulfills the above description of log-normal distributed data?
●
●
●●
●●
● ●
●
●
●
●
●●
●●
●
●●
●
●
●●
●
●
●
●
●
●
●
●●
●
● ● ●●
●●
●
●
●
●
●
●
●●
●
●
● ●
●●●
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
● ●
●
●
●
●●
●
●●
●
●
●
●
● ●
●
●
●
●●
●
● ●
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
●● ●●
●
●
●
●●
● ● ●
●
● ● ● ●
● ●
●
●
●
●
● ●
● ● ●
●
●
●●
●
● ●
●
●
●
●
●
●●
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
●
●● ● ●
●
●
●
●
●
●
●
● ●
●
● ●
●
●
●
●
●●
● ●
●
● ● ● ●
●
●
● ●
●
−3 −2 −1 0 1 2 3
−1
0 1 2
3
4
5
6
Standard normal distribution N(0,1)
Sample
A
●
● ●
●
●
●
● ● ●
● ●
●
●
● ●
●
●
●
●● ●
●
● ● ●
●
● ● ●● ● ● ● ●
●
● ●
● ●
●
● ●
●
●
●
●
● ●
●
● ●●●
●
●
●
●
●
●●
● ●
●
●
●
●
●
●
●
●
● ●● ● ●
●
●
● ● ●● ●
●
●●● ● ● ●
●●
●
● ● ● ●
●
●
● ●
●
●
●
●
●
●
● ●
●
● ●
●
●
●
● ● ●
●
● ●
● ●
●
● ●●
●
●
●
●
● ● ●● ● ●
●
●
●●● ● ●
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
● ● ●
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
● ● ● ●
●
●
●●
●
● ● ●
●
● ●
●●
●
●●
−3 −2 −1 0 1 2 3
−4 −2
0
2
4
6
Standard normal distribution N(0,1)
Sample
B
●
●
●
●●
●
●
●
●
●
●
●
●
●●
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
●●
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
●
●
●
●
●
●●
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
●●
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
●●
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
●
●
●
●
●
●●
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
●
−3 −2 −1 0 1 2 3
−1.5 −0.5 0.5 1.0 1.5
Standard normal distribution N(0,1)
Sample
C
●
●
●
●●
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
●
●
●
●
●●
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
●
●
●
●
●
●
●
●●
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
●●
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
●
●
●
●
●
●
●
●●
●
●
●
●
●
●
●
●●
●
●
●
●
●
●
−3 −2 −1 0 1 2 3
−3 −2 −1
0 1 2
Standard normal distribution N(0,1)
Sample
D
1*  A
2  B
3  C
4  D
5  None of the above.
16
----------------------------------- FACIT-BEGIN -----------------------------------
The answer is A. In B, the sample has more small values as well as more large values. The
sample in C has fewer small values and fewer large values. The sample in D seems to be normal
distributed. Verify the shape of a qq-plot of a log-normal distribution vs. a normal distribution
in R:
x <- rlnorm(100)
qqnorm(x)
qqline(x)
● ●
●
●
●
● ●
●● ● ●
●
● ●
●
● ●
●
●
●● ● ● ● ● ●
●
● ● ● ● ●
●
●
●
●
●
●
●
● ●●
●
●
●
● ●
● ●
● ●
●
●
● ● ●
● ●
●
●
●●
●
●
●
●●
● ●●
●
●
● ●
● ● ●
●
●
●
● ● ● ●● ●●● ●
●
●
●
●
●
●● ● ● ●
●
−2 −1 0 1 2
0 5 10 15
Normal Q−Q Plot
Theoretical Quantiles
Sample Quantiles
------------------------------------ FACIT-END ------------------------------------
`,`
17
Histogram 1
Density
−4 −2 0 2 4 6 8
0.00 0.05 0.10 0.15
Histogram 2
Density
5 10 15 20 25 30
0.00 0.02 0.04 0.06 0.08 0.10
Histogram 3
Density
0 10 20 30 40
0.00 0.02 0.04 0.06 0.08 0.10 0.12
`,`
Which distributions are simulated above? (N(µ, σ2
) refers to the normal distribution with
mean µ and variance σ
2
, χ
2
a
to the χ
2 distribution with a degrees of freedom, and Exp(β) to
the exponential distribution with rate β).
1  1: N(0, 4), 2: χ
2
10, 3: Exp(1/5)
2  1: χ
2
4
, 2: N(2, 4), 3: χ
2
1
.
3*  1: N(2, 4), 2: χ
2
12, 3: Exp(1/5)
18
4  1: N(2, 4), 2: Exp(5), 3: χ
2
1
5  1: N(2, 4), 2: χ
2
1
, 3: Exp(1/5)
----------------------------------- FACIT-BEGIN -----------------------------------
The distribution in Histogram 1 takes negative values (which the χ
2 distribution doesn’t), and
it seems symmetric around 2, so based on the available choices, it can only be the N(2, 4)
distribution. The χ
2
1 distribution has mean 1, and the Exp(5) distribution has mean 1/5.
Thus, based on Histogram 2 (where there isn’t even any values in the data which are as small
as 1), option 3 is the only possible choice. (This may be further verified by considering the
means of some of the other distributions as well).
------------------------------------ FACIT-END ------------------------------------
`,`
Two groups of rats are put on a diet while growing up, and their weight gain between day 28
and day 84 is recorded. 10 rats are put on a diet with a high protein content, while 7 rats are
put on a diet with a low protein content. The collected data (weight gain in grams) is shown
in the table below, with the total weight gain in each group given in the last row:
High protein content Low protein content
134 70
146 118
104 101
119 85
124 107
161 132
107 94
83
113
129
Total 1220 707
Using the numbers in the table, the sample variances in the two groups are calculated to be
s
2
H = 495 and s
2
L = 425, where H and L indicate the groups with high and low protein content,
respectively. It is further given that the usual test, for whether the expected weight gain is the
same for rats on high and low protein diets, has 13.7 degrees of freedom.
`,`
19
Which of the following choices is correct (both statements need to be correct)?
1  Rats in the low protein diet group gain more weight than rats in the high protein diet
group. However, the difference is not statistically significant at the significance level
α = 0.05.
2  Rats in the high protein diet group gain more weight than rats in the low protein diet
group. The difference is statistically significant at the significance level α = 0.05.
3  Rats in the high protein diet group gain more weight than rats in the low protein diet
group. The difference is statistically significant at the significance level α = 0.01.
4  Rats in the low protein diet group gain more weight than rats in the high protein diet
group. The difference is statistically significant at the significance level α = 0.05.
5*  Rats in the high protein diet group gain more weight than rats in the low protein diet
group. However, the difference is not statistically significant at the significance level
α = 0.05.
----------------------------------- FACIT-BEGIN -----------------------------------
The estimated difference in expected weight increase is
1220
10
−
707
7
= 21 ,
that is, the increase is larger in the high protein group. However, the observed t-test statistic
is
tobs =
21
p
495/10 + 425/7
= 2.000324
and as the 0.975 percentile of the t-distribution with 13.7 degrees of freedom is
qt(0.975, df = 13.7)
## [1] 2.149201
we conclude that the difference is not significant. This could also be concluded by writing in
the values in R and using the t.test() function.
------------------------------------ FACIT-END ------------------------------------
`,`
Statistics Denmark provides data related to Denmark at www.statistikbanken.dk, among it
data on traffic accidents. The following count data is taken from there:
20
Year 2010 2017
Type All Alcohol All Alcohol
Zone City Rural City Rural City Rural City Rural
Single-vehicle accidents 240 491 107 178 174 340 55 96
Others 1779 988 161 84 1456 819 106 48
Values under “all” count all accidents (including drunk-driving accidents) while numbers under
“alcohol” include only drunk-driving accidents.
`,`
Give a 99% confidence interval for the total proportion of drunk driving accidents in 2010,
where you use the relevant normal distribution approximation.
1  0.848 ± 2.58q
0.848
3498
2  0.152 ± 2.58q
0.848
3498
3  0.848 ± 1.96q
0.152·0.848
3498
4  0.848 ± 2.58q
0.152
3498
5*  0.152 ± 2.58q
0.152·0.848
3498
----------------------------------- FACIT-BEGIN -----------------------------------
See Method 7.3. Here, x = 107 + 178 + 161 + 84 = 530 and n = 240 + 491 + 1779 + 988 = 3498,
so
pˆ =
530
3498
= 0.152 , 1 − pˆ = 0.848 ,
and z0.995 = 2.58 is the 0.995 quantile of the standard normal distribution.
------------------------------------ FACIT-END ------------------------------------
`,`
Assume that the proportion of drunk-driving accidents in the “single-vehicle accidents” category
is representative of the total proportion of drunk-driving. (Thus, data from the “others”
category should not be used in this question).
21
Then, using the numbers from the table above and the wording from Table 3.1 of the book,
what may be concluded about the difference in drunk driving between the years 2010 and 2017?
1*  There is very strong evidence of a decrease in the proportion of drunk-driving accidents.
2  There is weak evidence of a decrease in the proportion of drunk-driving accidents.
3  There is little or no evidence of a difference in the proportion of drunk-driving accidents.
4  There is weak evidence of an increase in the proportion of drunk-driving accidents.
5  There is very strong evidence of an increase in the proportion of drunk-driving accidents.
----------------------------------- FACIT-BEGIN -----------------------------------
See Method 7.18. Here, x1 = 107 + 178 = 285, n1 = 240 + 491 = 731, x2 = 55 + 96 = 151,
n2 = 174 + 340 = 514. The test for equality of two proportions can be tested in R using the
following:
x1 <- 285
n1 <- 731
x2 <- 151
n2 <- 514
prop.test(c(x1,x2), c(n1,n2), correct = FALSE)
##
## 2-sample test for equality of proportions without continuity
## correction
##
## data: c(x1, x2) out of c(n1, n2)
## X-squared = 12.249, df = 1, p-value = 0.0004656
## alternative hypothesis: two.sided
## 95 percent confidence interval:
## 0.04318181 0.14902331
## sample estimates:
## prop 1 prop 2
## 0.3898769 0.2937743
The estimated proportion of alcohol-related accidents is smaller in 2017 than in 2010, and the
small p-value indicates very strong evidence against the hypothesis of no change from 2010 to
2017.
------------------------------------ FACIT-END ------------------------------------
22
`,`
From the same source, there is also data available on the speed limits for the road stretches
where the accidents occurred. The following data, describing the number of rural zone accidents
at different speed limits in the years 2010 and 2017, were extracted:
2010 2017
0 to 50 km/h 54 58
50 to 100 km/h 1280 966
100 to 130 km/h 144 135
What is the result of the usual test for no change in the distribution of accidents in the speed
limit intervals between the two years (both your conclusion and reasoning must be correct)?
Use the significance level α = 1%.
1*  No significant difference is found in the distribution of speed limits between the two years,
as the p-value is larger than the significance level.
2  A significant difference is found in the distribution of speed limits between the two years,
as the p-value is larger than the significance level.
3  A significant difference is found in the distribution of speed limits between the two years,
as the p-value is smaller than the significance level.
4  No significant difference is found in the distribution of speed limits between the two years,
as the p-value is smaller than the significance level.
5  None of the above statements are true.
----------------------------------- FACIT-BEGIN -----------------------------------
Data is read into R and a χ
2
-test is carried out:
data <- matrix(c(54, 1280, 144, 58, 966, 135), ncol = 2)
chisq.test(data)
##
## Pearson's Chi-squared test
##
## data: data
## X-squared = 5.8273, df = 2, p-value = 0.05428
It shows that the p-value for the test is above 1%, and hence a significant difference is found.
23
------------------------------------ FACIT-END ------------------------------------
`,`
In connection with the usual test for whether the distribution of speed limits is the same in
the two years, the following question is asked: What is the estimated proportion of accidents
on roads with speed limits from 50 to 100 km/h in 2017 under the null hypothesis?
1  (58 + 966 + 135)/(54 + 1280 + 144 + 58 + 966 + 135) = 0.440
2  (966)/(54 + 1280 + 144 + 58 + 966 + 135) = 0.366
3  (966)/(58 + 966 + 135) = 0.833
4*  (1280 + 966)/(54 + 1280 + 144 + 58 + 966 + 135) = 0.852
5  (54 + 58 + 144 + 135)/(54 + 1280 + 144 + 58 + 966 + 135) = 0.148
----------------------------------- FACIT-BEGIN -----------------------------------
Under the null hypothesis, the proportion of accidents that happen at 50 to 100 km/h roads
does not depend on the accident year, then the proportion is estimated using the data from both
years: x50−100km/h = 1280+966 = 2246 and n50−100km/h = 54+1280+144+58+966+135 = 2637.
Then
pˆ50-100km/h =
x50-100km/h
n50-100km/h
= 0.852
------------------------------------ FACIT-END ------------------------------------
`,`
Below is a sample of 20 independent observations, read into R in the vector x:
x <-
c(13, 12, 9, 7, 12, 15, 12, 10, 6, 13, 7, 13, 19, 12, 6, 4, 15, 16, 11, 18)
The data do not originate from a known distribution, but we are interested in the population
mean and the uncertainty of its estimate.
`,`
What is the sample mean ¯x and variance s
2
(both quantities must be correct)?
24
1  x¯ = 11.2 and s
2 = 16.7.
2*  x¯ = 11.5 and s
2 = 16.7.
3  x¯ = 11.2 and s
2 = 4.1.
4  x¯ = 11.5 and s
2 = 4.1.
5  x¯ = 11.5 and s
2 = 16.7
2
.
----------------------------------- FACIT-BEGIN -----------------------------------
Data can be read into R, and sample mean and variance calculated:
x <-
c(13, 12, 9, 7, 12, 15, 12, 10, 6, 13, 7, 13, 19, 12, 6, 4, 15, 16, 11, 18)
mean(x)
## [1] 11.5
var(x)
## [1] 16.68421
------------------------------------ FACIT-END ------------------------------------
`,`
Now, we perform a resampling of x to get an idea of the uncertainty of the sample mean. We
draw 200 resamples with replacement from the 20 observations in x, each with sample size
20. Subsequently, the mean of each of the 200 resamples is calculated. The R code for this
operation is:
apply(replicate(200, sample(x, replace = TRUE)), 2, mean)
Below, the 10 largest and 10 smallest sample means of the 200 resamples are shown.
smallest 9.00 9.65 9.65 9.80 9.90 9.95 10.00 10.00 10.00 10.05
largest 12.95 12.95 12.95 13.00 13.05 13.10 13.10 13.10 13.15 13.40
Using the results above and the book’s definition of percentiles (“type = 2” in R), which of
the following is a 95% bootstrap confidence interval for the population mean?
1  [10.05, 12.95]
25
2  [9.00, 13.40]
3  [9.80, 13.10]
4  [9.65, 13.10]
5*  [9.925, 13.075]
----------------------------------- FACIT-BEGIN -----------------------------------
See Definition 1.7. For n = 200, and p1 = 0.025, p2 = 0.975, it holds that p1n = 5 and
p2n = 195. Then, the relevant 0.25 quantile q0.025 is the average of the 5th and 6th ordered
averages, while the 0.975 quantile q0.975 is average of the 195th and 196th ordered averages:
q0.025 =
9.90 + 9.95
2
= 9.925 and q0.975 =
13.05 + 13.10
2
= 13.075
------------------------------------ FACIT-END ------------------------------------
`,`
During the preparation for a small festival, the toilet facilities are taken under consideration.
Mobile toilets need to be ordered such that the capacity is sufficient, but not too high, since
will lead to more cleaning and higher costs.
It is assumed that, on average, 150 guests need to use the toilets every hour, and that their
arrival follows a Poisson distribution. In addition, it is assumed that each toilet can serve 20
guests per hour.
`,`
Suppose that 10 toilets are ordered. What is then the probability that, in a randomly selected
hour, the number of guests who arrive at the toilets exceeds the capacity?
1*  0.0042%
2  2.3%
3  11%
4  24%
5  99%
26
----------------------------------- FACIT-BEGIN -----------------------------------
Let X represent the number of guests arriving at the toilets in a randomly selected hour,
then X ∼ Pois(150). The capacity is 10 · 20 = 200 per hour, hence we need to calculate
P(X > 200) = 1 − P(X ≤ 200):
1 - ppois(200, lambda=150)
## [1] 4.205886e-05
------------------------------------ FACIT-END ------------------------------------
`,`
A group of DTU students have decided to help small festivals optimize their logistical conditions. Among other things, the students have collected data on the use of toilets at small
festivals. An examination of these data shows that a better model can be made to represent
the number of guests who need to use the facilities in a randomly selected hour. This number
can be modelled by an exponential distribution with mean “number of guests”
10 , where “number of
guests” is the total number of guests at the festival. In this question, this new model must be
used.
A festival with 1500 guests is now considered. How many toilets should, at least, be ordered to
ensure that the probability that not everyone can use the facilities is less than 2% in a randomly
selected hour (given as a call in R)? It is still assumed that each toilet can serve 20 guests per
hour.
1  ppois(20, lambda = 15) * 20
2  qpois(0.98, lambda = 1500/10) / 20
3  qexp(0.98, rate = 10/15)
4*  qexp(0.98, rate = 10/1500) / 20
5  qexp(0.98, rate = 10/1500) * 20
----------------------------------- FACIT-BEGIN -----------------------------------
Let Y represent the number of guests arriving at the toilets in a randomly selected hour. Then
Y ∼ Exp(10/1500). We need to find y such that
P(Y ≤ 20y) ≥ 0.98.
We can solve P(Y ≤ 20y) = 0.98 for y by computing
27
qexp(0.98, rate = 10/1500) / 20
## [1] 29.34017
Thus, ordering 30 toilets or more ensures that the probability in focus stays below 2%.
------------------------------------ FACIT-END ------------------------------------
`,`
Below, there’s a small sample with 5 independent observations:
Observations: 11.8071067 -1.7913888 -9.1872410 -4.4860901 -0.2324924
`,`
Which of the following answer options is the only one that can possibly be correct?
1  It is impossible that the observations were sampled from a normal distribution with mean
0 and variance 102
.
2  It is possible that the observations were sampled from a uniform distribution with parameters -9 and 12.
3*  It is possible that the observations were sampled from a t-distribution with 1 degree of
freedom.
4  It is possible that the observations were sampled from an F-distribution with 1 and 2
degrees of freedom.
5  It is possible that the observations were sampled from an exponential distribution with
rate 1.
----------------------------------- FACIT-BEGIN -----------------------------------
The F distributions and exponential distributions don’t give rise to negative observations,
which eliminates options 4 and 5. Likewise, the uniform distribution with parameters -9 and
12 wouldn’t yield the observation −9.1872410, which elimates option 2. There is no reason
why the observations could not come from the N(0, 102
) distribution, which elimates option 1.
We’re then left with option 3: There’s no reason why these observations couldn’t come from
a t-distribution with 1 degree of freedom (like normal distributions, t distributions take both
positive and negative values).
28
------------------------------------ FACIT-END ------------------------------------
`,`
A sample was collected, and the following summary statistics were calculated:
Statistic Value
x¯ 5.69
s
2 7.96
Minimum 2.26
Q1 3.45
Q2 5.49
Q3 6.72
Maximum 11.46
n 15
Furthermore, a normal qq-plot was made of the observations:
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
−1 0 1
2 4 6 8 10
Normal Q−Q Plot
Theoretical Quantiles
Sample Quantiles
`,`
Which of the following can be concluded using the given information and the book’s definition
of extreme observations in a sample?
1  There is one extreme observation in the sample.
2  There are two extreme observations in the sample.
29
3  There are at least three extreme observations in the sample.
4*  There are no extreme observations in the sample.
5  With the given information, it cannot be concluded whether or not there are extreme
observations in the sample.
----------------------------------- FACIT-BEGIN -----------------------------------
First, note that
IQR = Q3 − Q1 = 6.72 − 3.45 = 3.27 ,
(Definition 1.15) so
Q3 + 1.5 · IQR = 11.625
Q1 − 1.5 · IQR = −1.455
There are no extreme observations in the sample, as the maximum is smaller than Q3+1.5·IQR
and the minimum is larger than Q1 − 1.5 · IQR.
------------------------------------ FACIT-END ------------------------------------
`,`
Which of the following conclusions can, with certainty, be drawn about the population using
the given information?
1  The population has no negative values.
2  The population is normal distributed.
3  The distribution of the population is left-skewed.
4  The population has no values above 11.46.
5*  None of the four conclusions above can be drawn.
----------------------------------- FACIT-BEGIN -----------------------------------
The summary statistics contribute to describing the sample and the data generating distribution, but they don’t tell the whole story about the population.
------------------------------------ FACIT-END ------------------------------------
30
`,`
Assuming that the observations in the sample are independent and identically normal distributed, what is a correct 95% confidence interval for the population mean?
1  5.69 ± 2.95 ·
2.82
14
2  5.69 ± 2.98 · √
7.96
15
3  5.69 ± 1.96 · √
2.82
14
4*  5.69 ± 2.14 · √
2.82
15
5  5.69 ± 2.58 · √
7.96
14
----------------------------------- FACIT-BEGIN -----------------------------------
See Method 3.9:
x¯ ± t0.975 ·
√
s
2
√
n
= 5.69 ± 2.14 ·
2.82
√
15
where t0.975 is the 0.975 quantile in the t-distribution with 14 degrees of freedom.
------------------------------------ FACIT-END ------------------------------------
The exam paper is finished. Have a great Christmas vacation!
31`]