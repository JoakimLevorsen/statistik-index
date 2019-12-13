export default [`
Calculate a 95% confidence interval for difference in mean µX in electricity consumption from
before to after the app was installed:
1  −11.3 ± 2.02 ·
45.5
39 = [−13.7, −8.94]
2  −22.6 ± 2.02 ·
45.5
39 = [−25.0, −20.2]
3*  −22.6 ± 2.02 ·
45.5
6.32 = [−37.1, −8.06]
4  −22.6 ± 2.02 ·
2070
6.32 = [−684, 639]
5  −22.6 ± 2.02 ·
2070
39 = [−130, 84.6]
————— FACIT-BEGIN —————
We simply use Method 3.8 for calculating the one sample confidence interval and insert the
correct numbers
−22.6 ± 2.02 ·
45.5
6.32
= [−37.1, −8.06]
————— FACIT-END —————
2
`,`
Is there a significant decrease in electricity consumption from from the month before to the
month after the installation of the app at 5% significance level (both the conclusion and reasoning (p-value) must be correct)?
1  Yes, a significant decrease can be detected, since the p-value for the obvious two-sided
test is 0.027
2  No, a significant decrease cannot be detected, since the p-value for the obvious two-sided
test is 0.027
3*  Yes, a significant decrease can be detected, since the p-value for the obvious two-sided
test is 0.0032
4  No, a significant decrease cannot be detected, since the p-value for the obvious two-sided
test is 0.0032
5  No, a significant decrease cannot be detected, since the p-value for the obvious two-sided
test is 0.21
————— FACIT-BEGIN —————
We want to test the hypothesis
H0 : µX = 0
H1 : µX 6= 0
and therefore we use Method 3.22 to calculate the p-value
2 · P

T > |
x¯
s/√
n
|

= 2 · P

T > |
−22.6
45.5/
√
40
|

= 0.0032
which is way below 0.05 and hence very strong evidence against the null hypothesis, which is
rejected and a significant decrease (since also ¯x < 0) in electricity consumption is found.
————— FACIT-END —————
`,`
It has been found that some consumers who install the app don’t start to use the app right
away after installation. Therefore, the onboarding (the process the user must go through the
first time the app is opened after installation) has been redesigned to get users started faster.
If the probability that a user doesn’t get started right away is set to p = 0.20 and 100 new
users are registered, and X denotes the number of those who doesn’t get started right away,
then find the one of the following R expressions, which calculates the probability of getting less
than 10 new users who doesn’t get started away, i.e. P(X < 10)?
3
1  phyper(q=1, m=20, n=80, k=10)
2*  pbinom(q=9, size=100, prob=0.2)
3  dbinom(x=10, size=100, prob=0.2)
4  1 - pbinom(q=10, size=100, prob=0.2)
5  dbinom(x=10, size=100, prob=0.2)
————— FACIT-BEGIN —————
We are sampling a binomial distributed variable which counts the number of successes in 100
draws and by defining a success to: the user do not start right after installation, the probability
of success is 0.2. In R pbinom() calculates the probability of q or less successes. Therefore, to
calculate P(X < 10) = P(X ≤ 9) then q=9.
————— FACIT-END —————
Continues on page 5
4
Exercise II
In a series of experiments it has been investigated how the compressive strength of concrete
depends on the composition of the concrete. The registered explanatory variables are the
amount of cement, water and sand measured in kg/m3
. The compressive strength is measured
in MPa. A summary of the data is given in the following table:
Cement Water Fine Strength
Min. 200.0 146.0 594.0 12.25
1st Qu. 289.0 185.0 754.0 22.49
Median 339.0 186.0 781.0 31.35
Mean 344.9 188.5 776.4 31.83
3rd Qu. 393.0 192.0 809.0 37.42
Max. 540.0 228.0 945.0 74.99
`,`
First a simple linear regression model with the amount of cement as an explanatory variable
is fitted and the following output from R is obtained (where a few numbers are replaced by
letters):
## Call:
## lm(formula = Strength ~ Cement, data = data2)
##
## Residuals:
## Min 1Q Median 3Q Max
## -20.5512 -0.6858 0.6280 1.4791 20.8302
##
## Coefficients:
## Estimate Std. Error t value Pr(>|t|)
## (Intercept) -15.736438 3.389030 A 1.96e-05 ***
## Cement 0.137930 0.009567 B < 2e-16 ***
## ---
## Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
##
## Residual standard error: 6.05 on 59 degrees of freedom
## Multiple R-squared: 0.7789,Adjusted R-squared: 0.7752
## F-statistic: 207.9 on 1 and 59 DF, p-value: < 2.2e-16
The relevant test statistic for testing if the amount of cement has a significant effect on the
compressive strength is found to?
1  0.009567/0.137930 ≈ 0.06936
2  1.96e
−5
5
3  −15.736438/3.389030 ≈ −4.643
4*  0.137930/0.009567 ≈ 14.42
5  6.05
————— FACIT-BEGIN —————
The t-test statistic is found as the estimated parameter divided by the corresponding standard
error. In this case: 0.137930/0.009567 = 14.41727 ≈ 14.42
————— FACIT-END —————
`,`
The following model has been fitted
Strengthi = β0 + β1 · Cementi + εi
, εi ∼ N(0, σ2
)
and it is wanted to use the model fit for predicting the compressive strength given the amount
of cement.
The prediction has the lowest variance when the amount of cement is:
1  339.0 kg/m3
2*  344.9 kg/m3
3  540.0 kg/m3
4  0.0 kg/m3
5  Cannot be answered based on the provided information
————— FACIT-BEGIN —————
The lowest variance is found for the average value of the predictor. Here 344.9 kg/m3 as listed
in the first table of the exercise. This can be seen from Equation (5-90) and Method 5.17
Equation (5-92), where xnew = ¯x makes the last term zero.
————— FACIT-END —————
`,`
An equivalent analysis for the dependence between the amount of water and the compressive
strength is carried out. The following R output is obtained:
6
## Call:
## lm(formula = Strength ~ Water, data = data2)
##
## Residuals:
## Min 1Q Median 3Q Max
## -23.361 -8.593 -1.161 5.239 28.568
##
## Coefficients:
## Estimate Std. Error t value Pr(>|t|)
## (Intercept) 116.1345 23.6644 4.908 7.62e-06 ***
## Water -0.4474 0.1253 -3.570 0.000718 ***
## ---
## Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
##
## Residual standard error: 11.67 on 59 degrees of freedom
## Multiple R-squared: 0.1776,Adjusted R-squared: 0.1637
## F-statistic: 12.74 on 1 and 59 DF, p-value: 0.0007184
If the residuals meet the usual assumptions, then the conclusion of the analysis is:
1  Water doesn’t have a significant effect on the compressive strength. More water results
in stronger concrete
2  Water doesn’t have a significant effect on the compressive strength. Less water results in
stronger concrete
3  Water has a significant effect on the compressive strength. More water results in stronger
concrete
4  Water doesn’t have a significant effect on the compressive strength. Therefore it cannot
be determined how the amount of water affects the compressive strength
5*  Water has a significant effect on the compressive strength. Less water results in stronger
concrete
————— FACIT-BEGIN —————
The p-value for the slope is 0.000718 which is lower than 5% so it is very significant. As the
sign of the estimated coefficient is negative then the compressive strength increases when the
amount of water is reduced.
————— FACIT-END —————
`,`
7
It is chosen to estimate a multiple linear regression model using the square root of the compressive strength as response. The other three variables are used as explanatory variables:
## Call:
## lm(formula = sqrt(Strength) ~ Cement + Water + Fine, data = data2)
##
## Residuals:
## Min 1Q Median 3Q Max
## -1.31854 -0.12044 0.06208 0.18913 0.73313
##
## Coefficients:
## Estimate Std. Error t value Pr(>|t|)
## (Intercept) 5.0623090 1.3125406 3.857 0.000295 ***
## Cement 0.0120327 0.0007024 17.131 < 2e-16 ***
## Water -0.0244132 0.0037730 -6.470 2.41e-08 ***
## Fine 0.0012022 0.0009038 1.330 0.188774
## ---
## Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
##
## Residual standard error: 0.3293 on 57 degrees of freedom
## Multiple R-squared: 0.9069,Adjusted R-squared: 0.902
## F-statistic: 185.1 on 3 and 57 DF, p-value: < 2.2e-16
Which of the following conclusions from the above output is most correct:
1  A model which only has “Cement” as explanatory variable should be fitted
2*  The variable “Fine” should be removed and the reduced model should be fitted
3  The variable “(Intercept)” should be removed and the reduced model should be fitted
4  The variable “Water” should be removed and the reduced model should be fitted
5  A model which only has “Fine” as explanatory variable should be fitted
————— FACIT-BEGIN —————
The parameter “Fine” has a non-significant p-value and therefore the model should be updated
without that variable. That includes estimating the parameters in the reduced model.
————— FACIT-END —————
`,`
Based on the presented R-outputs in the exercise the number of observations used in the
analyses is found to:
8
1*  61
2  60
3  59
4  2
5  1
————— FACIT-BEGIN —————
For the first two analysis a model with 2 parameters is estimated and there are 59 degrees of
freedom for the residuals, hence n = 2+59 = 61 observations, for the last analysis n = 4+57 =
61 observations.
————— FACIT-END —————
Continues on page 10
9
Exercise III
A study has been conducted of the relation between intake of vitamin C and frequency of
exercise. Below is a table of descriptive statistics for the intake of vitamin C in the three
exercise groups as well as histograms of the observations from the experiments:
Exercise
Never Sometimes Often
Mean 20.11 16.71 33.26
Median 7.23 9.27 11.27
SD 44.05 20.55 52.42
n 152 120 45
## Error in ggplot(dat, aes(x = z)): could not find function "ggplot"
## Error in eval(expr, envir, enclos): object ’p’ not found
We want to study whether there is a dependence between the intake of vitamin C and the
frequency of exercise. To do this a one-way analysis of variance is conducted. Where z is the
vitamin C intake and Group is a factor with three levels (Never exercise, Sometimes exercise,
Often exercise).
Two analyses have been conducted by running the following R-code (the reading of data is not
shown):
anova(lm(z ~ Group, data = dat))
## Analysis of Variance Table
##
## Response: z
## Df Sum Sq Mean Sq F value Pr(>F)
## Group 2 9060 4529.8 3.064 0.0481 *
## Residuals 314 464227 1478.4
## ---
## Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
anova(lm(log(z) ~ Group, data = dat))
## Analysis of Variance Table
##
## Response: log(z)
## Df Sum Sq Mean Sq F value Pr(>F)
## Group 2 2.94 1.4693 0.918 0.4004
## Residuals 314 502.53 1.6004
10
`,`
Which of the following statements is correct?
1  The analysis of z is the most correct since it is seen from the table that the intake of
vitamin C is higher in the group who exercise often
2  The analysis of z is the most correct since we want to determine the effect on vitamin C
and not the effect on the logarithm of vitamin C
3  The analysis of log(z) is the most correct since here the effect of Group was not statistically significant
4*  The analysis of log(z) is the most correct since the histograms indicate that the assumption of normality is not be valid for z
5  The analysis of z is the most correct since here the effect of Group was statistically
significant
————— FACIT-BEGIN —————
We want to compare the means in the three groups. However, from the table of summary
statistics we can see that for each group its mean is much higher than its median and they
also have high SD values. So the distributions are highly skewed, which is also seen in the
histograms.
This will give us problems with the assumption that the data should be normally distributed
in each group.
Looking at the histograms we see that we have only positive values and highly skewed distributions, therefore taking the logarithm is the most correct to do in this case.
————— FACIT-END —————
Continues on page 12
11
Exercise IV
In a study of high blood pressure it is investigated whether two different diets influences the
blood pressure. The study was conducted with 150 persons which were divided in 2 groups of
75 people. Group I is a control group receiving normal diet, while group II received healthy
dietary supplements. The results are shown in the following table; a certain level of the blood
pressure (or above) is defined as ’high’ (not necessarily too high):
Group Normal blod pressure High blod pressure Total
I 55 20 75
II 57 18 75
Total 112 38 150
`,`
A 95% confidence interval for the proportion of persons on normal diet (Group I) with high
blood pressure is:
1  0.49 ± 1.96q0.49107·(1−0.49107)
112 giving 0.49 ± 0.09
2  0.49 ± 1.645q0.49107·(1−0.49107)
55 giving 0.49 ± 0.11
3  0.27 ± 1.645q0.26667·(1−0.26667)
112 giving 0.27 ± 0.07
4  0.27 ± 1.96q0.49107·(1−0.49107)
75 giving 0.27 ± 0.09
5*  0.27 ± 1.96q0.26667·(1−0.26667)
75 giving 0.27 ± 0.10
————— FACIT-BEGIN —————
We get
pˆ = 20/75 = 0.26667 = 0.27
And the CI is found by the formula
pˆ± 1.96r
pˆ(1 − pˆ)
n
giving:
0.27 ± 1.96r
0.26667 · (1 − 0.26667)
75
0.27 ± 0.10
Or in R:
12
(ph <- 20/75)
## [1] 0.2666667
qnorm(0.975)
## [1] 1.959964
1.96*sqrt(ph*(1-ph)/75)
## [1] 0.100083
ph + c(-1, 1)*1.96*sqrt(ph*(1-ph)/75)
## [1] 0.1665836 0.3667497
————— FACIT-END —————
`,`
Which of the following computed values is a usual test statistic for a test of the hypothesis that
the proportions of people with high blood pressure in Groups I and II are the same?
1  1.962 = 3.84
2  1
56 +
1
19 = 0.07
3*  1
56 +
1
56 +
1
19 +
1
19 = 0.14
4  55
√−57
150 = 0.16
5
(112−38)2
150 = 36.5
————— FACIT-BEGIN —————
The usual χ
2
-test in a 2-by-2 table is found from:
X <- matrix(c(55, 20, 57, 18), nrow=2)
res <- chisq.test(X, correct=FALSE)
X
## [,1] [,2]
## [1,] 55 57
## [2,] 20 18
13
res
##
## Pearson's Chi-squared test
##
## data: X
## X-squared = 0.14098, df = 1, p-value = 0.7073
res$expected
## [,1] [,2]
## [1,] 56 56
## [2,] 19 19
E.g. the expected value e11 is found as
e11 =
112 · 75
150
= 56
So, the test-statistic becomes:
X
2
i=1
X
2
j=1
(oij − eij )
2
eij
=
1
56
+
1
56
+
1
19
+
1
19
= 0.14
————— FACIT-END —————
`,`
Suppose you had compared the proportions between 3 diet groups, that is, had a data table in
the following form (e.g. x32 denotes the number of people in Group III, who had high blood
pressure):
Group Normal blod pressure High blod pressure
I x11 x12
II x21 x22
III x31 x32
Which distribution would be used in the usual hypothesis test for a comparison of the three
proportions (i.e. the proportions of persons in each of the three groups with high blood pressure)?
1  A χ
2
-distribution with 3 degrees of freedom
14
2  An F-distribution with 2 and 3 degrees of freedom
3  An F-distribution with 2 and 5 degrees of freedom
4*  A χ
2
-distribution with 2 degrees of freedom
5  A χ
2
-distribution with 1 degree of freedom
————— FACIT-BEGIN —————
A χ
2
-test in an r-by-c frequency table is tested using the χ
2
-distribution with (r−1)·(c−1) = 2
degrees of freedom.
————— FACIT-END —————
`,`
This question is based on the text and the table given in the previous question.
What is a pre-planned 95% confidence interval for the difference between the proportions with
normal blood pressure in Group I and Group III?
1*  x11
x11+x12
−
x31
x31+x32
± 1.96q x11·x12
(x11+x12)
3 +
x31·x32
(x31+x32)
3
2  x11
x12
−
x31
x32
± 1.96q x11·x12
(x11+x12)
3 +
x31·x32
(x31+x32)
3
3  x11
x12
−
x31
x32
± 1.96q x11·x12
x11+x12
+
x31·x32
x31+x32
4  x11
x11+x21+x31
−
x31
x11+x21+x31
± 1.96q x11·x12
(x11+x21+x31)
2 +
x31·x32
(x11+x21+x31)
2
5  x11
x11+x12
−
x31
x31+x32
± 1.96q x11·x12
(x11+x21+x31)
2 +
x31·x32
(x11+x21+x31)
2
————— FACIT-BEGIN —————
From Method 7.14 with ˆp1 =
x11
x11+x12
and ˆp2 =
x31
x31+x32
and
qnorm(0.975)
## [1] 1.959964
15
and since ni = xi1 + xi2 (thus xi2 = ni − xi1). These are inserted (see first equation of Method
7.14)
pˆ1(1 − pˆ1)
n1
=
x11 · x12
(x11 + x12) · (x11 + x12) · (x11 + x12)
it follows that the correct interval is:
x11
x11 + x12
−
x31
x31 + x32
± 1.96r x11 · x12
(x11 + x12)
3
+
x31 · x32
(x31 + x32)
3
————— FACIT-END —————
`,`
A new study is planned to explore a completely new diet. The required precision is that the
90% confidence interval for the proportion of people with normal blood pressure achieves a
mean width of 0.1. The total cost for handling a single person is 100 kr, and there is assigned
in total 25000 kr for this in the budget for the study. Can the requirement be fulfilled within
the given budget (note, you know nothing about the value of the proportion)?
1  Yes, since 100 ·

1.96
0.05 2
= 153664 < 25000
2  Yes, since 100 · 0.3 · ·0.7 ·

1.645
0.05 2
= 22730.61 < 25000
3  No, since 1
4
·

1.96
0.05 2
≈ 384
4  Yes, since 1
4
·

1.96
0.05 2
≈ 384
5*  No, since 100 ·
1
4
·

1.645
0.05 2
= 27060.25 > 25000
————— FACIT-BEGIN —————
The formula to be used is found from Equation (7-5)
n =
1
4

z0.95
0.05!2
=
1
4

1.645
0.05 2
= 270.60
since we have no information what so ever about the wanted proportion, it does not make any
sense to use the other possible formula, where a guess/scenario for the unknown p is used (i.e.
p = 0.5). So the costs will be more than 27000 (and hence more than 25000):
100*0.25*(1.645/0.05)^2
## [1] 27060.2
————— FACIT-END —————
Continues on page 17
17
Exercise V
`,`
Let Xi ∼ N(µ, σ2
), i = 1, ..., n. If n = 10 what is then
P

X − µ
S/√
n
> 2

where S
2 and X is the empirical variance and average, respectively (random variables)?
1  6.8 · 10−5
2*  0.038
3  0.012
4  0.988
5  0.962
————— FACIT-BEGIN —————
P

X − µ
S/√
n
> 2

This is reconized as a t-distribution with n − 1 degrees of freedom hence
1-pt(2,df=9)
## [1] 0.03827641
————— FACIT-END —————
Continues on page 19
18
Exercise VI
`,`
A multiple choice exam have 30 questions and 5 answer options for each question. There is one
and only one correct answer for each question. What is the probability of answering correct on
to at least 15 of the 30 questions, if you answer completely at random?
1  0.000119
2*  0.00023
3  0.835
4  0.999
5  4.5 · 10−9
————— FACIT-BEGIN —————
We have 30 draws of success or non-success and each draw is independent of each other (i.e. we
just put an answer at random for each question). Let X be the number of successes (correct
answers) out of the 30 draws, then X is binomial distributed with n = 30 and with probability
of a success p = 1/5. We want to calculate
P(X ≥ 15) = P(X > 14) = 1 − P(X < 14) (1)
and this we can look in R by
1-pbinom(14,size = 30, prob=1/5)
## [1] 0.0002312256
————— FACIT-END —————
`,`
Which of the following random variables should not be approximated by a normal distribution?
1
P200
i=1 Xi
, Xi ∼ Pois(2)
2
P5
i=1 Xi
, Xi ∼ N(µ, σ2
)
3
P10
i=1 Xi
, Xi ∼ Binom(1000, 0.5)
19
4
P100
i=1 Xi
, Xi ∼ Exp(1)
5*
P7
i=1 Xi
, Xi ∼ Exp(1)
————— FACIT-BEGIN —————
Using the central limit theorem we see that 1 and 4 can be approximated by a normal distribution (they are sums of a large number of random variable), 2 is a normal distribution (a sum
of normal distributed variables is also normal distributed, Theorem 2.40), the binomial with
n=1000 is well approximated by a normal distribution (Remark 7.4) and hence also the sum
of such variables. This leaves only 5 as a relevant option and indeed the sum of 7 exponential
random variables will not be well approximated by a normal distribution.
————— FACIT-END —————
Continues on page 21
20
Exercise VII
The lifetime of a particular type of electronic buttons is assumed to follow an exponential
distribution with a mean of 5 years.
`,`
What is the variance of the lifetime of such buttons?
1  1 years
2  1/5 years
3  5 years
4*  25 years
5  1/25 years
————— FACIT-BEGIN —————
According to Theorem 2.49 the mean and rate is related by λ =
1
µ
for an exponential distributed
random variable. We know that µ = 5, hence λ =
1
5
and therefore (use also Theorem 2.49)
σ
2 =
1
1
5
2
= 25 (2)
————— FACIT-END —————
`,`
If 10 of such buttons are installed in different systems (without interaction), what is then the
probability that none of these breaks down within the first year?
1*  0.1353
2  0.4350
3  0.1074
4  0.3758
5  0.6241
21
————— FACIT-BEGIN —————
First, we calculate the probability that one button will break down in the first year (as in the
previous we have that the rate is λ =
1
µ =
1
5
per year)
pexp(1, 1/5)
## [1] 0.1812692
and this we can use in the binomial distribution to calculate the probability that none of the
10 buttons will break down in the first year
dbinom(0, 10, 0.18127)
## [1] 0.135334
# or simply directly by
(1-0.18127)^10
## [1] 0.135334
————— FACIT-END —————
Continues on page 23
22
Exercise VIII
An experiment is carried out to examine four different methods (A, B, C, D) for removing
impurities in a chemical process. At the same time it is wanted to adjust for using three
different reactors in the experiment. The data are shown in the table below:
Reactor 1 Reactor 2 Reactor 3 Sum
Method A 23.97 29.54 37.91 91.42
Method B 12.67 17.48 20.28 50.43
Method C 25.85 40.09 38.00 103.94
Method D 21.29 23.58 20.19 65.06
Sum 83.78 110.69 116.38 310.85
The sums of squares have been calculated:
SS
Reactor 151.61
Method 593.40
Residual 100.73
Total variation 845.74
`,`
We now want to investigate whether it is reasonable to assume that the four methods clean
equally well. Using the above sums of squares the usual test statistic, here denoted by A, as
well as the critical value (the level of significance is α = 0.05), is found to:
1  A = 5.89 and A < 8.94 (i.e. no significant effect of Method)
2*  A = 11.78 and A > 4.76 (i.e. a significant effect of Method)
3  A = 441.79 and A > 4.76 (i.e. a significant effect of Method)
4  A = 0.70 and A < 8.94 (i.e. no significant effect of Method)
5  A = 3.91 and A < 4.76 (i.e. no significant effect of Method)
————— FACIT-BEGIN —————
Using Theorem 8.22 we need to calculate the test statistic
F =
SS(Method)/(k − 1)
SSE/((k − 1)(l − 1))
23
Where k is the number of methods (here k = 4) and l the number of reactors (here l = 3).
From the table we have
SS(Method) = 593.40
SSE = 100.73
So the test statistic becomes
F =
593.40/3
100.73/6
= 11.78
This test statistic follows an F-distribution with (k − 1) and (k − 1)(l − 1) degrees of freedom.
So the critical value is from an F(3,6)
qf(0.95,3,6)
## [1] 4.757063
Since the observed test statistic 11.78 > 4.76 then the hypothesis of equal methods is rejected.
Using R:
anova(lm(Y ~ Method + Reactor))
## Analysis of Variance Table
##
## Response: Y
## Df Sum Sq Mean Sq F value Pr(>F)
## Method 3 593.40 197.800 11.7821 0.00631 **
## Reactor 2 151.61 75.804 4.5153 0.06361 .
## Residuals 6 100.73 16.788
## ---
## Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
————— FACIT-END —————
`,`
A model for two-way analysis of variance will often be formulated for this type of experiment
by
Yij = µ + αi + βj + ij , ij ∼ N(0, σ2
), i = (1, 2, 3, 4), j = (1, 2, 3)
24
Here yij is the observed purity for method i reactor j, µ the overall mean, α the method-effect
and β the reactor-effect.
What is the usual estimate of the effect of Method B (i.e. ˆα2) in the model?
1  αˆ2 = 50.43
2  αˆ2 = −260.42
3  αˆ2 = 16.81
4  αˆ2 = 4.20
5*  αˆ2 = −9.09
————— FACIT-BEGIN —————
According to (8-23) and (8-24) we want to calculate
µˆ =
1
4 · 3
X
4
i=1
X
3
j=1
yij
αˆ2 =

1
3
X
3
j=1
y2j
!
− µˆ
Inserting here we have
µˆ =
1
12
· 310.85 = 25.90
αˆ2 =

1
3

· 50.43 − 25.90 = −9.09
————— FACIT-END —————
`,`
Before the experiment was conducted it was decided to compare Method B and Method C.
What is the 95% confidence interval for the comparison of B and C, if this is the only post-hoc
comparison to be carried out?
1  (50.43 − 103.94)/3 ± 2.3060q100.73
12−4
(2/3) = [−24.52, −11.16]
2  (50.43 − 103.94) ± 2.4469q
100.73
6
(2/3) = [−61.70, −45.32]
25
3  (50.43 − 103.94)/3 ± 2.4469q
100.73
6
(1/3 + 1/4) = [−25.49, −10.18]
4*  (50.43 − 103.94)/3 ± 2.4469q
100.73
6
(2/3) = [−26.02, −9.65]
5  (50.43 − 103.94)/3 ± 2.3060q100.73
12−4
(1/3 + 1/4) = [−24.09, −11.59]
————— FACIT-BEGIN —————
We will use Method 8.9 with SSE from the two-way analysis and (n−k) replaced by (k−1)(l−1).
Method 8.9 now says:
y¯2 − y¯3 ± t1−α/2
s
SSE
(4 − 1)(3 − 1)(1/3 + 1/3)
From the table we get
y¯2 = 50.43/3 = 16.81
y¯3 = 103.94/3 = 34.65
SSE = 100.73
We have (k − 1)(l − 1) = (4 − 1)(3 − 1) = 6 degrees of freedom so t1−α/2
qt(0.975, df=6)
## [1] 2.446912
All in all we have
(50.43 − 103.94)/3 ± 2.4469r
100.73
6
(2/3)
−17.8367 ± 8.1861
[−26.02; − 9.65]
————— FACIT-END —————
`,`
If it was decided to make all pairwise comparisons between the methods, what is then the
Bonferroni corrected ”least significant difference (LSD)”?
26
1*  3.8630p
2 · 16.788/3 = 12.92
2  3.4789p
2 · 12.591/3 = 10.08
3  2.4469p
2 · 16.788/6 = 5.79
4  3.8630p
2 · 12.591/3 = 11.19
5  2.4469p
2 · 16.788/3 = 8.19
————— FACIT-BEGIN —————
We want to find LSD Bonferroni, which is given in Remark 8.13 and we have m = 3 observations
for each Method.
LSD Bonferroni = t1−αBonferroni/2
p
2 · MSE/m
Now the number of tests is M = k(k − 1)/2 = (4 · 3)/2 = 6 so αBonferroni = 0.05/6 = 0.008333
and the quantile in the t-distribution with (k−1)(l−1) = (4−1)(3−1) = 6 degrees of freedom
is
alphaBonf<- 0.05/6
qt(1-alphaBonf/2, df=6)
## [1] 3.862991
We also need MSE
MSE =
SSE
(k − 1)(l − 1) =
100.73
6
= 16.788
So now
LSD Bonferroni = 3.8630p
2 · 16.788/3 = 12.92
————— FACIT-END —————
Continues on page 28
27
Exercise IX
Below are four scatter plots of y and x observations: ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●
−1.0 −0.5 0.0 0.5 1.0
−1 0 1 2 3 4
a)
x
y ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●● ● ● ●
−1.0 −0.5 0.0 0.5 1.0
−6 −4 −2 0 2
b)
x
y ● ● ● ● ● ● ●● ● ● ● ● ●
−1.0 −0.5 0.0 0.5 1.0
5 10 15
c)
x
y ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●
−1.0 −0.5 0.0 0.5 1.0
1 2 3 4 5 6
d)
x
y
`,`
Which four correlation coefficients (in the order a), b), c), d)) fits best with the observations
in the figure?
1  0.9, -0.5, 0.65, 0
2*  0.5, -0.9, 0.97, 0
3  0.5, -0.9, 0.65, 0
4  0.5, 0.97, 0, -0.9
5  0.97, -0.9, 0, 0.5
————— FACIT-BEGIN —————
Lets go through options:
28
• 1: It cannot be that a) have 0.9 and c) have 0.65, since the correlation in c) is clearly
higher than in a)
• 2: The correlations fits well with the plots
• 3: That a) and c) should have more or less same correlation is not the case, and that b)
should have stronger correlation than c) (opposite sign, but stronger) is not the case
• 4: The correlation of b) is not positive
• 5: The correlation of c) is not zero
Hence, only one of the answers fits nicely.
————— FACIT-END —————
`,`
From inspection of plot c) in the figure, which estimates of the parameters in the usual simple
linear regression model Yi = β0 + β1xi + εi where εi ∼ N(0, σ2
) fits best to those observations
in plot c)?
1  βˆ
0 = 10, βˆ
1 = 5 and ˆσ = 10
2  βˆ
0 = 16, βˆ
1 = −5 and ˆσ = 1
3  βˆ
0 = 10, βˆ
1 = 7 and ˆσ = 10
4  βˆ
0 = −10, βˆ
1 = −7 and ˆσ = 5
5*  βˆ
0 = 10, βˆ
1 = 7 and ˆσ = 1
————— FACIT-BEGIN —————
From plot c) it can be seen that the estimates should be
• From the y-values around x = 0, it is clear that the intercept estimate βˆ
0 should be
around 10
• From the y-values around x = 0 (i.e. ≈ 10) and the y-values around x = 1 (i.e. slightly
above 15, hence ≈ 17), it the most reasonable slope estimate βˆ
1 is around 7 (hence 5 can
not directly be ruled out)
• The spread of the y-values seems constant around a fitted straight line. Thus, by considering a normal distribution around this straight line, then we know that around 95%
of all points should be within ±2 standard deviations (σ), hence a ˆσ = 1 seems very
reasonable (e.g. if ˆσ = 5 then around x = 0 the y-values should be in the range from 0
to 20, and the spread of the points would be much higher!)
29
Only one options fits to all three estimates.
————— FACIT-END —————
Continues on page 31
30
Exercise X
DTU Food monitors and provides analyses of Danish dietary habits. They have done so since
1985 at the request of the Ministry of Environment and Food of Denmark, and the results are
obtained on the basis of surveys. The results are used as input for adjustments to the official
dietary recommendations and the basis for a political priority of prevention efforts.
In the surveys the respondents were asked how much fish they eat in grams of fish per day. A
random sample of 300 female respondents is taken from the dietary survey from 2005 to 2008,
and equivalently also a random sample of 300 male respondents from the same dietary survey.
The observations are read into a vector for women xWomen and a vector for men xMen. The
empirical density (density histogram) for the observations for each gender is plotted:
par(mfrow=c(1,2), cex=0.8)
hist(xWomen, prob=TRUE, xlim=range(xWomen,xMen))
hist(xMen, prob=TRUE, xlim=range(xWomen,xMen))
Histogram of xWomen
xWomen
Density
0 50 100 150 200 250
0.000 0.010 0.020
Histogram of xMen
xMen
Density
0 50 100 150 200 250
0.000 0.010 0.020
It is found that the assumption of normal distribution is not met. Therefore no assumption of
distribution should be made in the analysis.
`,`
To determine the 95% confidence interval for the mean intake of fish per day for women in the
population on the basis of the sample from the 2005-2008 dietary survey, the following R-code
is run (of which everything might not necessarily be meaningful):
31
## Number of simulated samples
k <- 10000
simsamples <- replicate(k, sample(xWomen, replace=TRUE))
simprms <- apply(simsamples, 2, mean)
quantile(simprms, c(0.025,0.975))
## 2.5% 97.5%
## 20.0 25.8
simsamples <- replicate(k, rnorm(length(xWomen),
mean=log(mean(xWomen)), sd=sd(xWomen)))
simprms <- apply(simsamples, 2, mean)
quantile(simprms, c(0.025,0.975))
## 2.5% 97.5%
## 0.213 6.033
simsamples <- replicate(k, sample(xWomen, replace=TRUE))
simprms <- apply(simsamples, 2, median)
quantile(simprms, c(0.005,0.995))
## 0.5% 99.5%
## 14.2 20.8
simsamples <- replicate(k, sample(xMen, replace=TRUE))
simprms <- apply(simsamples, 2, median)
quantile(simprms, c(0.005,0.995))
## 0.5% 99.5%
## 17.1 24.5
simsamples <- replicate(k, runif(100,0,40))
simprms <- apply(simsamples, 2, mean)
quantile(simprms, c(0.025,0.975))
## 2.5% 97.5%
## 17.7 22.3
Based on the above outputs, what is then a correct 95% confidence interval for the mean intake
of fish per day for women in the population?
1*  [20.0, 25.8]
2  [0.213, 6.03]
3  [14.2, 20.8]
32
4  [17.1, 24.5]
5  [17.7, 22.3]
————— FACIT-BEGIN —————
We have to find the result from the simulation which is correct according to the information
we have. Lets check the answer options:
• 1: The xWomen sample is re-sampled randomly k times (i.e. non-parametric bootstrapping,
hence no assumption about the distribution) and for each re-sample the sample mean is
calculated, and finally all the correct quantiles of these are found to get the 95% confidence
interval
• 2: The re-sampling is from a normal distribution with parameters calculated from the
xWomen sample (i.e. parametric bootstrapping). This is not in accordance with the
information: “the assumption normal distribution is not met”
• 3: The re-sampling is correct, but instead of the sample mean, then the sample median
is calculated
• 4: It is the xMen sample which is re-sampled, not the xWomen sample
• 5: It is just a uniform distribution which is re-sampled, hence it has nothing to do with
the intake of fish per day for women
————— FACIT-END —————
`,`
Note, that an assumption of normal distribution of the intake of fish is not met and no transformations are found to be reasonable to meet such an assumption.
In the following, we want to investigate whether men and women eat significant different
amounts of fish per day, corresponding to the following hypothesis:
H0 : q0.5,male = q0.5,female
H1 : q0.5,male 6= q0.5,female
where q0.5,gender denotes the 50% quantile for the specified gender.
In order to test the hypothesis the following R-code has been run (note that everything not
necessarily is meaningful):
33
t.test(xMen-xWomen)
##
## One Sample t-test
##
## data: xMen - xWomen
## t = 1.5632, df = 299, p-value = 0.1191
## alternative hypothesis: true mean is not equal to 0
## 95 percent confidence interval:
## -0.831932 7.259018
## sample estimates:
## mean of x
## 3.213543
t.test(xMen, xWomen)
##
## Welch Two Sample t-test
##
## data: xMen and xWomen
## t = 1.5867, df = 595.71, p-value = 0.1131
## alternative hypothesis: true difference in means is not equal to 0
## 95 percent confidence interval:
## -0.7641231 7.1912096
## sample estimates:
## mean of x mean of y
## 25.95814 22.74460
simprms <- replicate(k, median(sample(xMen, replace=TRUE))-
median(sample(xWomen, replace=TRUE)))
quantile(simprms, c(0.025, 0.975))
## 2.5% 97.5%
## 0.564 7.714
simprms <- replicate(k,
mean(rnorm(length(xMen),mean(xMen),sd(xMen))) -
mean(rnorm(length(xWomen),mean(xWomen),sd(xWomen))))
quantile(simprms, c(0.025, 0.975))
## 2.5% 97.5%
## -0.776 7.225
median(xMen) > median(xWomen)
## [1] TRUE
34
At a significance level α = 0.05, what is then the conclusion of the hypothesis test (both the
conclusion and argumentation must be correct)?
1  Since p-value = 0.1191 > 0.05 it cannot be rejected that q0.5,male = q0.5,female
2  Since 0 ∈ [−0.764, 7.191] it cannot be rejected that q0.5,male = q0.5,female
3*  Since 0 ∈/ [0.564, 7.714] it can be rejected that q0.5,male = q0.5,female
4  Since 0 ∈ [−0.776, 7.225] it cannot be rejected that q0.5,male = q0.5,female
5  Since ˆq0.5,male > qˆ0.5,female it can be rejected that q0.5,male = q0.5,female
————— FACIT-BEGIN —————
The t-tests are not correct, since they deal with the difference in mean, not in median (i.e. 50%
quantile). We have to use the result from the non-parametric bootstrap simulation, where the
two samples are re-sampled and the difference in median is calculated for each re-sample:
simprms <- replicate(k, median(sample(xMen, replace=TRUE))-
median(sample(xWomen, replace=TRUE)))
quantile(simprms, c(0.025, 0.975))
which result is a simulated 95% confidence interval. We know that a hypothesis for a value
which is not in the confidence interval (with same significance level) will be rejected. Therefore,
the hypothesis of no difference in median between the two groups is rejected, since 0 is not in
the confidence interval.
————— FACIT-END —————
`,`
Among the 10 official dietary guidelines from the Food Authority is one which states that a
person should eat plenty of fish and preferably 350 g per week. This applies to both men and
women.
In the following we will examine whether the sample from the dietary survey 2005-2008 provides
evidence that dietary recommendation is met. Since dietary survey measured the daily intake
of fish, it corresponds (a little simplified) to the following hypothesis:
H0 : µ = 50
H1 : µ 6= 50
Data is not normally distributed, mainly because of the many 0-observations, i.e. respondents
who do not eat fish. To test the hypothesis the following R-code has been run (note that all of
it may not be meaningful):
35
## Number of simulated samples
k <- 10000
simsamples <- replicate(k, sample(xMen, replace=TRUE))
simprms <- apply(simsamples, 2, mean)
quantile(simprms, c(0.005, 0.025, 0.975, 0.995))
## 0.5% 2.5% 97.5% 99.5%
## 22.5 23.3 28.7 29.6
simsamples <- replicate(k, sample(xWomen, replace=TRUE))
simprms <- apply(simsamples, 2, sd) - 50
quantile(simprms, c(0.005, 0.025, 0.975, 0.995))
## 0.5% 2.5% 97.5% 99.5%
## -32.1 -31.1 -16.5 -14.1
simsamples <- replicate(k, sample(c(xMen,xWomen), replace=TRUE))
simprms <- apply(simsamples, 2, mean) - 50
quantile(simprms, c(0.005, 0.025, 0.975, 0.995))
## 0.5% 2.5% 97.5% 99.5%
## -28.2 -27.6 -23.6 -23.0
simsamples <- replicate(k, sample(c(xMen,xWomen), replace=TRUE))
simprms <- apply(simsamples, 2, quantile, probs=0.90)
quantile(simprms, c(0.005, 0.025, 0.975, 0.995))
## 0.5% 2.5% 97.5% 99.5%
## 44.9 45.8 55.0 56.9
Using a significance level of α = 0.05 what is the conclusion on the hypothesis that the dietary
recommendation regarding intake of fish is met (both the conclusion and argumentation must
be correct)?
1*  Since 0 ∈/ [−27.6, −23.6] the null hypothesis is rejected, hence there is not a significant
difference (i.e. µ 6= 50) hence the recommendation is not met
2  Since −50 ∈/ [−28.2, −23.0] the null hypothesis is rejected, hence there is not a significant
difference (i.e. µ 6= 50) hence the recommendation is not met
3  Since 50 ∈ [45.8, 55.0] it cannot be rejected that µ 6= 50, hence the recommendation is
met
4  Since 50 ∈/ [22.5, 29.6] the null hypothesis is rejected, hence there is not a significant
difference (i.e. µ 6= 50) hence the recommendation is not met
36
5  Since 44.9−50 = −5.1 < 0 the null hypothesis is rejected, hence there is not a significant
difference (i.e. µ 6= 50) hence the recommendation is not met
————— FACIT-BEGIN —————
We have to check that we take the result which is calculated the right way, the following points
should be correct:
• The correct samples: the re-sampling should include both xMen and xWomen
• The correct statistic is calculated on the re-samples according to the null hypothesis: the
difference between the sample mean and 50
• The correct quantiles of the re-sampled test statistic values according to the significance
level of α = 0.05: the 95% confidence interval, which is formed by the 2.5% and 97.5%
quantiles
This leaves option 1 to be answer where the conclusion and arguments are correct according to
all three points above.
————— FACIT-END —————
Continues on page 38
37
Exercise XI
A new scanner for measuring the mass of the muscles in the body has been developed. It is
much easier and faster to use compared to the otherwise available scanners. It is tested in
an experiment to find out if it gets the similar results as the normally used scanner. For the
experiment 20 randomly selected women aged 20 to 40 years have been scanned with both
scanners.
The measured muscle mass in kg are read into R, such that the order of the women is the same
in each vector:
## Sample from the new scanner
x1 <- c(37.6, 31.3, 22.9, 27.1, 41.8, 23.3, 24.5, 24.6, 32.1, 23.8, 33.9, 37.7,
22.5, 38.6, 31.8, 21.0, 32.2, 17.1, 32.6, 15.5)
## Sample from the old scanner
x2 <- c(35.9, 28.7, 27.9, 29.8, 46.8, 24.2, 28.0, 23.7, 35.2, 26.4, 36.0, 40.9,
24.8, 42.1, 32.5, 23.7, 36.7, 19.2, 37.7, 16.3)
and the following R code is run:
(mean(x1)-mean(x2)) + c(-1,1) * qt(0.975, df=38) * sd(x2-x1)/sqrt(40)
## [1] -2.9228 -1.5372
t.test(x1, x2)
##
## Welch Two Sample t-test
##
## data: x1 and x2
## t = -0.916, df = 37.8, p-value = 0.37
## alternative hypothesis: true difference in means is not equal to 0
## 95 percent confidence interval:
## -7.1591 2.6991
## sample estimates:
## mean of x mean of y
## 28.595 30.825
t.test(x1, x2, paired=TRUE)
##
## Paired t-test
##
## data: x1 and x2
## t = -4.61, df = 19, p-value = 0.00019
## alternative hypothesis: true difference in means is not equal to 0
38
## 95 percent confidence interval:
## -3.2429 -1.2171
## sample estimates:
## mean of the differences
## -2.23
t.test(x2-mean(x1))
##
## One Sample t-test
##
## data: x2 - mean(x1)
## t = 1.25, df = 19, p-value = 0.23
## alternative hypothesis: true mean is not equal to 0
## 95 percent confidence interval:
## -1.5043 5.9643
## sample estimates:
## mean of x
## 2.23
t.test(x1-mean(x2))
##
## One Sample t-test
##
## data: x1 - mean(x2)
## t = -1.35, df = 19, p-value = 0.19
## alternative hypothesis: true mean is not equal to 0
## 95 percent confidence interval:
## -5.6965 1.2365
## sample estimates:
## mean of x
## -2.23
`,`
What is the correct 95% confidence interval for the mean difference in measurement of muscle
mass between the old and the new scanner (here rounded to three significant digits)?
1  [-2.92, -1.54]
2  [-7.16, 2.70]
3*  [-3.24, -1.22]
4  [-1.50, 5.96]
39
5  [-5.70, 1.24]
————— FACIT-BEGIN —————
This is a paired setup since each women is measure first with the one scanner and then the
other. Therefore, we could take the difference and calculate the confidence interval using the
differences directly
t.test(x1-x2)
##
## One Sample t-test
##
## data: x1 - x2
## t = -4.61, df = 19, p-value = 0.00019
## alternative hypothesis: true mean is not equal to 0
## 95 percent confidence interval:
## -3.2429 -1.2171
## sample estimates:
## mean of x
## -2.23
which is exactly the same as the we get with the option paired=TRUE.
————— FACIT-END —————
`,`
The accuracy of a scan depends on how much the person to be scanned is moving. In the new
scanner the person is not fastened, so it is of interest to find out how large the variation of
the measurements is. To investigate this the 20 women were scanned two times with the new
scanner each and the difference in muscle mass (X∆) for each woman between the 2 scans were
measured to:
i 1 2 3 4 5 6 7 8 9 10
x∆,i -0.62 1.12 0.24 2.07 -2.91 2.02 0.36 0.43 -1.77 -0.18
i 11 12 13 14 15 16 17 18 19 20
x∆,i 1.02 0.85 0.43 1.39 2.82 -4.03 2.84 2.8 1.36 -0.07
The sample mean and standard deviation were calculated to
x¯∆ = 0.509
sx∆ = 1.82
40
Which of the following is a correct 99% confidence interval for the standard deviation of the
measured muscle mass of the new scanner?
1  0.509 ± 2.86 · √
1.35
20 = [−0.35, 1.37]
2
h
20·1.822
38.6
,
20·1.822
6.84 i
= [1.72, 9.69]
3  0.509 ± 2.09 · √
1.35
20 = [−0.12, 1.14]
4  0.509 ± 2.86 · √
1.82
19 = [−0.69, 1.70]
5*
q
19·1.822
38.6
,
q
19·1.822
6.84 
= [1.28, 3.03]
————— FACIT-BEGIN —————
The confidence interval for the standard deviation is given in Method 3.18 with the formula
"s
(n − 1)s
2
χ
2
1−α/2
,
s
(n − 1)s
2
χ
2
α/2
#
and then we just need to insert the values and find the quantiles in the χ
2 distribution by
qchisq(0.005, 19)
## [1] 6.844
qchisq(0.995, 19)
## [1] 38.582
to find that
"r
19 · 1.822
38.6
,
r
19 · 1.822
6.84 #
= [1.28, 3.03]
is the correct interval.
————— FACIT-END —————
THE EXAM IS FINISHED. Enjoy the late summer!
41`]