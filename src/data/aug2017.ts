export default [`
Which of the following R-calls correctly calculates the p-value for a t-test of the hypothesis?
1  t.test(after, before, mu=0)
2  t.test(after, before, mu=-10)
3  t.test(after, before, mu=10)
4  t.test(after, mu=10)
5*  t.test(after-before, mu=0)
----------------------------------- FACIT-BEGIN -----------------------------------
Since there is a measurement for each swimmer before and after the camp the correct way to
analyze the data is a paired t-test, and they are ordered such that the time for each swimmer
is in the same place in before as in after. The paired analysis is carried out by using a singlesample t-test on the differences, this is done in Answer 5. Answer 1 to 3 assume independent
samples (non-paired) and Answer 4 only test the speed after the camp.
------------------------------------ FACIT-END ------------------------------------
2
`,`
The p-value of the test was calculated to 0.00287. Can the null hypothesis be rejected at
significance level α = 5% (both conclusion and argument must be correct)?
1*  Yes, since the p-value is below the significance level the null hypothesis is rejected
2  No, since the p-value is below the significance level the null hypothesis is accepted
3  Yes, since the p-value is over the significance level the null hypothesis is rejected
4  No, since the p-value is over the significance level the null hypothesis is accepted
5  More information is needed in order to decide against the null hypothesis
----------------------------------- FACIT-BEGIN -----------------------------------
Since the p-value is less than the significance level (0.00287 < 0.05), the null hypothesis is
rejected.
------------------------------------ FACIT-END ------------------------------------
`,`
Each day at the training camp, there is a random drawing about who should do the dishes.
There must be 4 each day for doing the dishes and there are in total 35 participants. For each
participant there is equally high probability of being drawn each day. Calculate the probability
that a participant will not do the dishes at all during training camp, which includes 7 evenings
with dish washing.
1  1 -
7
0

· 0.1440
· (1 − 0.144)7−0 = 0.57
2

5
2

· 0.1442
· (1 − 0.144)5−2 = 0.09
3

7
7

· 0.7987
· (1 − 0.798)7−7 = 0.21
4*

7
7

· 0.8867
· (1 − 0.886)7−7 = 0.43
5

5
2

· 0.8862
· (1 − 0.886)5−2 = 0.01
----------------------------------- FACIT-BEGIN -----------------------------------
The probability that a participant does not have to do the dishes at a specific day is 1 −
4
35 =
0.886. Since the probability is the same every day, these must be independent draws and t
probability distribution for the number of times a participant have do the dishes is a binomial
with n = 7 and p = 0.886. Hence the probability can be calculated by

7
7

· 0.8867
· (1 − 0.886)7−7 = ·0.8867 = 0.43 (1)
or in R by
## Sandsynligheden for ikke at bliver trukket alle 7 dage
dbinom(7, 7, 1-4/35)
## [1] 0.4276176
------------------------------------ FACIT-END ------------------------------------
Continues on page 5
4
Exercise II
In connection with the exam in Introduction to Statistics, it is desired to examine whether
foreign students are doing well. The score of the exam is calculated as a number between -30
and 150, as there are 30 questions and a wrong answer gives -1 point and a correct answer gives
5 points. There can only be given one answer to each question.
Two random samples of the score has been taken: one for foreign students (x) and one for
Danish students (y). Each sample has 30 observations.
`,`
To assess the most appropriate analysis, a histogram is plotted of each sample:
Histogram of x
x
Frequency
0 50 100 150
0
2
4
6
8
Histogram of y
y
Frequency
0 50 100 150
0 1 2
3
4
5
6
7
What is the most appropriate statement based on the given information?
1  Nothing indicates that the samples don’t come from symmetrical distributed populations
2  The samples cannot be assumed to come from symmetrical distributed populations. This
is supported by the histograms, in particular the distribution of x appears to be rightskewed
3*  The samples cannot be assumed to come from symmetrical distributed population. This
is supported by the histograms, in particular the distribution of x appear to be left-skewed
4  The populations from which the samples are taken can both be assumed to be exponentially distributed
5  The populations from which the samples are taken can both be assumed to be normally
distributed
5
----------------------------------- FACIT-BEGIN -----------------------------------
• The histogram of x show that the empirical distribution is highly skewed, hence Answer
1 is wrong
• The x data is left skewed hence Answer 2 is wrong
• Answer 3 is correct (see the arguments for 1 and 2 being wrong)
• Exponential data is right-skrewed, hence Answer 4 is wrong
• Normally distributed data is symmetrical hence 5 is wrong
------------------------------------ FACIT-END ------------------------------------
`,`
It is decided that the best analysis is included in the following R code:
## Number of simulations
k <- 10000
## Simulate each sample k times
simxsamples <- replicate(k, sample(x, replace=TRUE))
simysamples <- replicate(k, sample(y, replace=TRUE))
## Calculate the sample mean differences
simmeandifs <- apply(simxsamples,2,mean) - apply(simysamples,2,mean)
## Quantiles of the differences gives the CI
quantile(simmeandifs, c(0.005,0.995))
## 0.5% 99.5%
## 1.205 44.370
quantile(simmeandifs, c(0.025,0.975))
## 2.5% 97.5%
## 6.349 39.310
## CI for the median differences
simmediandifs <- apply(simxsamples,2,median) - apply(simysamples,2,median)
quantile(simmediandifs, c(0.005,0.995))
## 0.5% 99.5%
## -7.577 55.500
quantile(simmediandifs, c(0.025,0.975))
## 2.5% 97.5%
## 3.00 47.56
6
Which of the following statements is correct?
1*  Non-parametric bootstrap confidence intervals have been calculated for differences between two populations
2  Parametric bootstrap confidence intervals have been calculated for differences between
two populations
3  Confidence intervals for differences between two populations have been calculated under
the assumption of normal distributions
4  Confidence intervals for differences between two populations have been calculated under
the assumption of exponential distributions
5  Confidence intervals for differences between two populations have been calculated under
the assumption of Poisson distributions
----------------------------------- FACIT-BEGIN -----------------------------------
The R code calculates non-parametric bootstrap confidence intervals for the differences in scores
between the two populations (DK and foreign students). Its done both for the mean (with levels
99% and 95%), and the same confidence intervals for the median. It is non-parametric because
no assumption about the distribution is made, which is carried out by sampling directly from
the observations with the sample() funtion (instead of e.g. using rnorm() which would be
under assumption of normal distribution).
------------------------------------ FACIT-END ------------------------------------
`,`
The following hypothesis should be tested at significance level α = 5%
H0 : q0.5,x = q0.5,y
H1 : q0.5,x 6= q0.5,y
where q0.5,x denotes the 50% quantile for foreign students and q0.5,y denotes the 50% quantile
for Danish students.
Which of the following statements is correct (not all of the statements are necessarily meaningful)?
1  H0 is rejected and it can be concluded that Danish students perform significantly better
than foreign students at the indicated level of significance
2*  H0 is rejected and it can be concluded that foreign students perform significantly better
than Danish students at the indicated level of significance
7
3  H0 is not rejected and it cannot be concluded that Danish students perform significantly
different than foreign students at the indicated level of significance
4  H0 is not rejected and it can be concluded that Danish students perform significantly
different than foreign students at the indicated level of significance
5  None of the above statements are correct
----------------------------------- FACIT-BEGIN -----------------------------------
The R code for the previous question gives the 95% confidence interval for the median as
[3.00; 47.56], hence the null hypothesis is rejected at level α = 0.05 since (0 ∈/ [3.00; 47.56]),
further since the minimun in the interval is higher than 0, we can conclude that the foreign
students perform significantly better than the Danish students.
------------------------------------ FACIT-END ------------------------------------
Continues on page 9
8
Exercise III
Let two independent random variables be given by
X1 ∼ N(−20, 102
) and X2 ∼ N(20, 102
).
Their probability density functions (pdfs) are then:
-100 -50 0 50 100
0.00 0.02 0.04
x
f1(x)
X1
-100 -50 0 50 100
0.00 0.02 0.04
x
f2(x)
X2
`,`
Now a new random variable is defined by
Y = X1 + X2.
Which of the following plots is then the pdf for Y ?
-100 -50 0 50 100
0.00 0.04 0.08
y
f(y)
A
-100 -50 0 50 100
0.00 0.02 0.04
y
f(y)
B
-100 -50 0 50 100
0.000 0.015
y
f(y)
C
-100 -50 0 50 100
0.00 0.04 0.08
y
f(y)
D
9
1  Plot A
2  Plot B
3*  Plot C
4  Plot D
5  None of the shown plots can be close to the pdf of Y
----------------------------------- FACIT-BEGIN -----------------------------------
First of all sums of independent normal random variables are normal random variables (this
exclude plots A and B), also we have that
E[Y ] = E[X1] + E[X2] = 0,
V[Y ] = V[X1] + V[X2] = 200.
The variance of Y is greater than the variance of X1 and X2 hence we can exclude Plot D, and
the only remaining option is Plot C that have a larger variance the X1 and X2, hence plot C
is correct. This can be confirmed with simulation:
## (x1+x2) = var(x1) + var(x2) = 100 + 100 = 200
x1 <- rnorm(n, mean=-20, sd=10)
x2 <- rnorm(n, mean=20, sd=10)
y <- x1 + x2
par(mfrow=c(2,2), mgp=c(1.6,0.5,0), mar=c(4,3,1,1), tcl=-0.4)
hist(x1, xlim=c(xmin,xmax), prob=TRUE)
lines(xseq, dnorm(xseq,mean=-20,sd=10), type="l")
hist(x2, xlim=c(xmin,xmax), prob=TRUE)
lines(xseq, dnorm(xseq,mean=20,sd=10), type="l")
hist(y, xlim=c(xmin,xmax), prob=TRUE)
lines(xseq, dnorm(xseq,mean=0,sd=sqrt(200)), type="l")
10
Histogram of x1
x1
Density
-100 -50 0 50 100
0.00 0.02
Histogram of x2
x2
Density
-100 -50 0 50 100
0.00 0.02 0.04
Histogram of y
y
Density
-100 -50 0 50 100
0.000 0.015
------------------------------------ FACIT-END ------------------------------------
`,`
Assuming X1 and X2 each represent a population and the test for difference in mean value
with the commonly used non-paired t-test should be carried out. What is the smallest sample
size n = n1 = n2 that must be taken from each population, at significance level α = 5%, in
order to achieve a power of the test of at least 99%?
1*  n = 4 observations in each sample
2  n = 12 observations in each sample
3  n = 38 observations in each sample
4  n = 69 observations in each sample
5  n = 248 observations in each sample
----------------------------------- FACIT-BEGIN -----------------------------------
The difference in mean of the two distributions is 40, and the standard deviation in each os the
two groups is 10, hence we can find the the number of observation needed with:
11
power.t.test(delta=40, sd=10, sig.level=0.05, power=0.99)
##
## Two-sample t test power calculation
##
## n = 3.644287
## delta = 40
## sd = 10
## sig.level = 0.05
## power = 0.99
## alternative = two.sided
##
## NOTE: n is number in *each* group
hence the correct answer is n = 4, since we must round up to nearest integer.
------------------------------------ FACIT-END ------------------------------------
Continues on page 13
12
Exercise IV
The figure below shows the relation between the height of about 1000 fathers and their sons
measured in inches: ● ● ● ● ● ●● ● ● ● ● ● ● ● ●●● ●● ●● ● ● ● ● ●● ● ● ●●● ● ● ● ●●●● ●●●● ● ● ●●● ●● ●● ●● ●● ● ● ● ● ● ● ● ●●●●● ● ● ● ● ●●●●● ● ● ● ●●● ● ●●●●●●● ●● ● ● ● ●● ● ● ●● ●● ● ● ● ● ●● ●● ● ● ● ● ● ● ● ●● ● ● ● ● ●●●● ● ● ●●●● ●●●● ● ● ● ●● ● ●●●● ●● ● ●● ●● ●● ● ●●● ●● ● ●●●●● ● ●● ● ● ●● ● ●●● ● ●● ●● ●● ●● ● ● ● ●● ● ●● ●●●●●● ●● ●● ● ● ●● ●● ●● ●● ● ● ● ● ●● ● ●● ● ● ●● ● ● ● ● ● ● ●●●●● ● ● ● ● ●●●●● ●● ● ●● ● ● ● ●●●●● ●●●● ● ● ●● ●● ● ●● ● ● ●●●● ●●●● ●●● ●● ●●● ●●● ● ● ● ● ●● ● ● ●● ●●● ●●●●●● ● ●● ● ● ●● ● ●● ●● ● ● ●●● ● ●●● ● ●● ●● ●●● ●● ● ● ● ●● ● ● ● ● ● ●● ● ●● ● ● ● ●● ●●●●● ● ●● ● ● ●● ● ●●●● ● ●●●●● ● ● ● ●●● ●● ●●● ●●● ●●● ●●●● ● ● ● ● ● ● ●● ●●●● ●●● ●● ● ●● ● ●●●● ●●●●●●● ● ● ● ● ●●●●● ● ● ● ● ● ● ● ●● ● ● ● ● ● ● ● ● ● ● ● ● ●● ●●● ● ● ●● ●● ●●● ● ● ● ● ● ● ● ● ●●● ● ● ●●●● ●●● ●● ●● ●●●● ●●●● ●●●● ●●● ● ● ● ●● ● ●●●●●●● ●● ●● ●●●●● ●●● ●● ●● ● ● ● ● ● ●●● ● ●● ●● ●● ●●● ● ●●●●●● ●● ● ● ● ●● ●● ● ● ● ● ● ● ●
60
65
70
75
60 65 70 75
Father
Son
The shown regression line describes the fit of the following model
Yi = β0 + β1 · xi + εi
, εi ∼ N(0, σ2
) and i.i.d.,
where Yi
is the height of the i’th son and xi
is the height of the i’th father.
`,`
Which of the following statements is a correct description of the regression line?
1  The line describes an estimate of the mean height of the sons as a function of their fathers
mean height
2  The line describes an estimate of the linear correlation between the average height of
father and son
3  The line describes an estimate of the fathers mean height as a function of the height of
their sons
4*  The line describes an estimate of the sons mean height as a function of the height of their
fathers
5  The line describes the height of a son as a function of the height of the father
----------------------------------- FACIT-BEGIN -----------------------------------
13
• The regression line show an estimate of the mean (or expected) height of sons as a function
fathers height (not mean height) hence Answer 1 is wrong
• The estimation of correlation cannot be directly derived from the regression line, hence
Answer 2 is wrong
• In Answer 3 the relation is reversed (hence it is wrong)
• Answer 4 correctly states that the line describe the mean (or expected) height of sons as
a function of fathers heights
• The heights of sons as a function of the heights og fathers is the points not the line (hence
Answer 5 is wrong)
------------------------------------ FACIT-END ------------------------------------
`,`
It is chosen to analyze the data with the following R code, where fs is a data frame with the
columns Son and Father holding the observed heights:
summary(fit <- lm(Son ~ Father, data=fs))
Which gives the following result where two numbers are replaced by letters:
Call:
lm(formula = Son ~ Father, data = fs)
Residuals:
Min 1Q Median 3Q Max
-8.8910 -1.5361 -0.0092 1.6359 8.9894
Coefficients:
Estimate Std. Error t value Pr(>|t|)
(Intercept) 33.89280 A 18.49 <2e-16 ***
Father 0.51401 B 19.00 <2e-16 ***
---
Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
Residual standard error: 2.438 on 1076 degrees of freedom
Multiple R-squared: 0.2512, Adjusted R-squared: 0.2505
F-statistic: 360.9 on 1 and 1076 DF, p-value: < 2.2e-16
How large a proportion of the variation in the height of sons is not explained by the height of
the fathers?
14
1  Approximately 25%
2  Approximately 50%
3*  Approximately 75%
4  Approximately 86.5%
5  Approximately 66%
----------------------------------- FACIT-BEGIN -----------------------------------
The proportion of explaned variation is the multiple R2 value, this is 0.2512 or approximately
25%, hence the variation not explained will is approximately 75%.
------------------------------------ FACIT-END ------------------------------------
Continues on page 16
15
`,`
What is the estimate of the standard deviation of the coefficient for Father?
1  σˆβ1 = 0.514/2.438 = 0.211
2  σˆβ1 = 2.438/1076 = 0.00227
3  σˆβ1 = 0.514 · 19.00 = 9.77
4  σˆβ1 = 33.89/18.49 = 1.83
5*  σˆβ1 = 0.514/19.0 = 0.027
----------------------------------- FACIT-BEGIN -----------------------------------
We have the formula for the test statistic
Tβ1 =
βˆ
1 − β0,1
σˆβ1
,
and we know that the default t-test printed out by summary() is for
H0 : β0,1 = 0
so we can write
tβ1,obs =
βˆ
1 − 0
σˆβ1
,
where tβ1,obs is the observed Tβ1 which is printed out.
Rearranged it gives and values found in the result
σˆβ1 =
βˆ
1 − 0
tβ1,obs
=
0.514
19.0
= 0.027.
------------------------------------ FACIT-END ------------------------------------
`,`
Given the following calculations in R, what is a 95% confidence interval for the mean height of
sons of fathers who are 75 inches tall?
16
mean(fs$Father); var(fs$Father)
## [1] 67.68683
## [1] 7.539566
mean(fs$Son); var(fs$Son)
## [1] 68.68423
## [1] 7.930949
1*  33.893 + 0.514 · 75 ± 1.96 · 2.438 ·
q 1
1078 +
(75−67.687)2
7.540·(1078−1)
2  33.893 + 0.514 · 75 ± 1.96 · 2.438 ·
q
1
1078 +
(75−67.687)2
7.540
3  33.893 + 0.514 · 75 ± 1.96 · 2.4382
·
q 1
1078 +
(75−67.687)2
7.540·(1078−1)
4  33.893 + 0.514 · 75 ± 1.96 · 2.438 ·
q 1
1077 +
(75−67.687)2
7.540·(1077−1)
5  33.893 + 0.514 · 75 ± 1.65 · 2.4382
·
q 1
1077 +
(75−67.687)2
7.540·(1077−1)
----------------------------------- FACIT-BEGIN -----------------------------------
The general formula for the confidence interval is
β0 + β1xnew ± tα/2 · σ ·
s
1
n
+
(xnew − x¯)
2
Sxx
we can find, β0 = 33.89, β1 = 0.514, σ = 2.438, and n = 1076 + 2 = 1078 in the summary print
out above. In addition we got ¯x = 67.69 in the calculation above, note also that Sxx = (n−1)s
2
x
where s
2
x
is the empirical variance of farthers height, hence Sxx = 1077 · 7.540. The degrees of
fredom for the t-distibution is n − 2 = 1076 which gives tα/2 = 1.96 Inserting the numbers we
get Answer 1 as the correct answer. This can also be checked by the folllowing R calculations.
n <- 1078
sxx <- 7.540 * (n-1)
xnew=75
xbar <- 67.687
sigma <- 2.438
beta0 <- 33.893
beta1 <- 0.514
round(beta0 + beta1*xnew + c(-1, 1) * qt(0.975, df=n-2) * sigma *
sqrt((1/n) + ((xnew - xbar)^2/sxx)), 2)
17
## [1] 72.03 72.86
round(predict(fit, data.frame("Father"=75), interval="conf"), 2) # Check
## fit lwr upr
## 1 72.44 72.03 72.86
------------------------------------ FACIT-END ------------------------------------
18
`,`
Now information about each family’s monthly income is obtained and the following model is
setup
Yi = β0 + β1 · x1,i + β2 · x2,i + εi
, εi ∼ N(0, σ2
) and i.i.d.,
where Yi
is the height of the i’th son, x1,i is height of the i’th father, and x2,i is the income for
the i’th family.
Under the following two assumptions:
• Rich families eat better and a better diet has a significant positive effect, which gives the
sons of the family a higher growth
• There is independence between the father’s height and the family’s income
what is the consequence of adding the income into the model (not all answers are necessarily
meaningful)?
1*  Inclusion of income in the model will contribute to reducing the residual variance (ˆσ
2
) and
the uncertainty of the regression coefficient for the father’s height (β1) will be reduced
2  Inclusion of income in the model will contribute to reducing the residual variance (ˆσ
2
),
but this will not affect the uncertainty of the regression coefficient for the father’s height
(β1)
3  As the fathers height is independent of the fathers income, the inclusion of income in the
model will not affect the estimate of β1 or the uncertainty of it
4  Inclusion of income in the model will use one more degree of freedom, such that a confidence interval for β1 may be expected to be wider than if incomes were not included in
the model
5  One must expect a high degree of multicollinearity between the estimates of β1 and β2,
so the model must be reduced to a simple linear regression model
----------------------------------- FACIT-BEGIN -----------------------------------
Lets go through the possibilities one by one:
• Answer 1: Including an effect that has a significant effect will reduce the residual variation,
and with independence between fathers height and family income the unceartaity for β1
will be reduced. Hence 1 is correct
19
• Answer 2: The residual variantion has a direct effect on the uncertainty of the parameters,
hence 2 cannot be correct
• Answer 3: With the agrument in ans 2, this cannot be correct either
• Answer 4: The effect of using a degree of freedom is very small, hence the effect of
reducing the variance will dominate, hence 4 is not correct
• Answer 5: Since we assume tat these are independent we will not expect multicollinarity
------------------------------------ FACIT-END ------------------------------------
Continues on page 21
20
Exercise V
In humans there are a variety of different genetic determined blood type systems. The most
well-known are probably the AB0- and Rhesus-systems. Another blood type system is the
so-called MN blood type system, which is determined by a single gene Glycophorin A (GPA).
In the GPA-gene there are two alleles M and N, such that a human may have the genotype
(blood type) MM, MN, or NN.
The distribution of blood types in the MN blood type system is now seeked estimated from a
sample of volunteer students of two different Philippine universities. One university, University of the Philippines-Diliman, here shortened UPD, is the country’s largest university where
students come from all over the country. The second university, Isabela State University, here
abbreviated ISU, is a small university where the students primarily come from the local area.
The following table lists the distribution of genotypes among the students in the samples from
the two universities:
Bloodtype UDP ISU
MM 19 43
MN 15 7
NN 17 9
`,`
State the χ
2
test statistic and the conclusion of the test in which the MN blood type distribution
in the two universities are compared (both test size and conclusion must be correct).
1  The test statistic is χ
2 = 14.15, its distribution has 2 degrees of freedom and the test
shows that there is some evidence for a difference in the MN blood type distribution at
the two universities
2*  The test statistic is χ
2 = 14.15, its distribution has 2 degrees of freedom and the test
shows that there is very strong evidence for a difference in the MN blood type distribution
at the two universities
3  The test statistic is χ
2 = 3.76, its distribution has 2 degrees of freedom and the test shows
that there is not found any evidence for a difference in the MN blood type distribution
at the two universities
4  The test statistic is χ
2 = 4.57, its distribution has 1 degree of freedom and the test
shows that there is evidence for a difference in the MN blood type distribution at the two
universities
5  The test statistic is χ
2 = 3.76, its distribution has 1 degree of freedom and the test shows
that there is weak evidence for a difference in the MN blood type distribution at the two
universities
21
----------------------------------- FACIT-BEGIN -----------------------------------
The easiest way to solve this is by using chisq.test:
## Define the table
Bloodtype <- matrix(c(19,43,15,7,17,9),nrow=3,byrow=T)
colnames(Bloodtype) <- c("UDP","ISU")
rownames(Bloodtype) <- c("MM","MN","NN")
## Answer:
chisq.test(Bloodtype)
##
## Pearson's Chi-squared test
##
## data: Bloodtype
## X-squared = 14.154, df = 2, p-value = 0.0008443
We can see that the test-statistics is 14.15 and the degrees of freedom is 2, the p-value is
0.00084, and hence very strong evidence against the null hypothesis. The null hypothesis being
that there is no difference in the distribution of blood cells between the universities. This is
Answer 2.
We could also solve this by “hand”-calculations
## By hand:
mat <- Bloodtype
Exp <- rowSums(mat) %o% colSums(mat) / sum(mat)
Chisq.val <- sum((mat - Exp)^2 / Exp)
df <- prod(dim(mat) - 1)
pchisq(Chisq.val, df, lower=FALSE)
## [1] 0.0008443032
------------------------------------ FACIT-END ------------------------------------
`,`
A biological population is said to be in Hardy-Weinberg (HW) equilibrium if the proportion of
genotypes can be written as
pMM = p
2
,
pMN = 2pq,
pNN = q
2
.
22
Where p and q are the allele frequencies for M and N, respectively. They are calculated by
p =
2 · XMM + XMN
2n
,
q =
2 · XNN + XMN
2n
,
where Xbloodtype is the observed number of the blood type and n is the sample size. Thus for
UDP
pMN = 2 ·
2 · XMM + XMN
2n
·
2 · XNN + XMN
2n
= 0.4992,
is set as the proportion of MN blood type under HW-equilibrium.
A simple test to decide whether the population on UDP is not in HW-equilibrium can therefore
be of the hypothesis
H0 : pMN,UDP = 0.4992
H1 : pMN,UDP 6= 0.4992
i.e. if the observed proportion of MN blood type on UDP pMN,UDP is equal to the proportion
under HW-equilibrium.
We want to test whether it can be rejected that the genotypes on UDP are in HW-equilibrium.
What is the usually applied test statistic for this test?
1  The test statistic is χ
2 = 2(1.99 + 4.30 + 2.32) = 17.2
2*  The test statistic is zobs = √
15−25.46
25.46·(1− 25.46
51 )
= −2.93
3  The test statistic is zobs = √
15−51
51·(1− 15
51 )
= −6.00
4  The test statistic is χ
2 = (1.992 + 4.302 + 2.322
)/2 = 13.9
5  The test statistic is χ
2 = 1.99 + 4.30 + 2.32 = 8.6
----------------------------------- FACIT-BEGIN -----------------------------------
This is a large sample test for a single proportion so we use the standard normal distribution
zobs = p
x − np0
np0(1 − p0)
and the values are found for UDP and inserted
np0 = 0.4992 · 51 = 25.46,
zobs =
15 − 25.46
q
25.46(1 −
25.46
51 )
=
15 − 25.46
q
25.46(1 −
25.46
51 )
= −2.93.
23
------------------------------------ FACIT-END ------------------------------------
`,`
For another type of test for HW-equilibrium the test statistic is found to χ
2 = 24.52 and under
the null hypothesis it will follow a χ
2
-distribution with 1 degree of freedom. What is the p-value
and conclusion of the test using a significance level of 0.001?
1  p-value is pchisq(24.52, df=1) ≈ 1 and the hypothesis of HW-equilibrium cannot be
rejected
2  p-value is 1 - pchisq(24.52, df=1) < 0.001 and the hypothesis of HW-equilibrium
cannot be rejected
3*  p-value is 1 - pchisq(24.52, df=1)< 0.001 and the hypothesis of HW-equilibrium is
rejected
4  p-value is 1 - pnorm(sqrt(24.52)) < 0.001 and the hypothesis of HW-equilibrium cannot be rejected
5  p-value is 1 - pnorm(sqrt(24.52)) < 0.001 and the hypothesis of HW-equilibrium is
rejected
----------------------------------- FACIT-BEGIN -----------------------------------
The solution is to find that the correct p-value is calculated in R by:
## Either
pchisq(24.52, df=1, lower.tail=FALSE)
## [1] 7.354249e-07
## Or
1 - pchisq(24.52, df=1)
## [1] 7.354249e-07
so the p-value is below 0.001 and thus the conclusion is that the null hypothesis is rejected.
------------------------------------ FACIT-END ------------------------------------
`,`
24
For theoretical reasons it has been suggested that the frequencies of genotypes MM and NN in
the underlying population are the same and it is now of interest to investigate this on the basis of
the observations from UDP. Assuming that the proportions for MM and NN are independent a
90% confidence interval for the difference in the proportion of MM and NN (pMM,UDP−pNN,UDP)
is given by:
1*  2/51 ± 1.64q
19·32
513 +
17·34
513
2  2/51 ± 1.96q
19·32
513 +
17·34
513
3  2/51 ± 1.64q
19·32
512 +
17·34
512
4  2/51 ± 1.96q
19·32
512 +
17·34
512
5  2/51 ± 1.68q
19·32
513 +
17·34
513
----------------------------------- FACIT-BEGIN -----------------------------------
Find the formula in Chapter 7 in “Proportion estimate and confidence interval” and insert the
values:
## Answer ("manually"):
sd.pid <- sqrt(19*32/51^3 + 17*34/51^3)
CI <- (19/51 - 17/51) + c(-1, 1) * qnorm(0.95) * sd.pid
round(CI, 3)
## [1] -0.116 0.195
## Answer using prob.test
event <- c(19,17)
n <- c(51,51)
prop.test(event, n, conf.level=0.90, correct=FALSE)
##
## 2-sample test for equality of proportions without continuity
## correction
##
## data: event out of n
## X-squared = 0.17172, df = 1, p-value = 0.6786
## alternative hypothesis: two.sided
## 90 percent confidence interval:
## -0.1163144 0.1947457
## sample estimates:
## prop 1 prop 2
## 0.3725490 0.3333333
25
------------------------------------ FACIT-END ------------------------------------
Continues on page 27
26
`,`
What is the usual test statistic for the test that the proportions of MM and NN are equal at
UDP, i.e. H0 : pMM,UDP = pNN,UDP ?
1  zobs =
2
51q19·32
512 + 17·34
512
2  zobs = q
2/51
19·32
513 + 17·34
513
3*  zobs =
2
51√ 6
17
11
17
2
51
4  zobs = √
2/51
6
17
6
19
2
51
5  zobs = q
2/51
19·34
513 + 17·32
513
----------------------------------- FACIT-BEGIN -----------------------------------
Find the formula for the test statistic under “Two sample proportions hypothesis test” and
insert the values:
x1 <- 17;
x2 <- 19;
n1 <- n2 <- 15+19+17
p1 <- 17/n1
p2 <- 19/n2
(delta.p <- p2 - p1)
## [1] 0.03921569
(phat <- (17+19)/(51+51))
## [1] 0.3529412
(zobs <- delta.p / sqrt(phat*(1-phat)*(1/n1 + 1/n2)))
## [1] 0.4143877
## The formula from the answer give the same answer
2/51/sqrt((6/17)*(11/17)*(2/51))
## [1] 0.4143877
------------------------------------ FACIT-END ------------------------------------
27
Continues on page 28
28
Exercise VI
A sample with the following 10 observations is taken:
x <- c(-1.63, -1.37, -1.21, -0.60, -0.36, -0.26, -0.18, 0.02, 0.29, 0.39)
Notice that the observations have been sorted in the code above.
The sample mean and sample standard deviation are calculated:
mean(x)
## [1] -0.491
sd(x)
## [1] 0.7003
`,`
What is the sample variance?
1  s
2 = 0.21
2*  s
2 = 0.49
3  s
2 = 1.46
4  s
2 = 1.70
5  s
2 = 2.36
----------------------------------- FACIT-BEGIN -----------------------------------
The sample variance is simple the squared standard deviation s
2 = 0.072 = 0.49, or in R:
var(x)
## [1] 0.4904
------------------------------------ FACIT-END ------------------------------------
`,`
What is the first quartile of the sample?
29
1  Q1 = −1.37
2  Q1 = −1.29
3*  Q1 = −1.21
4  Q1 = −0.91
5  Q1 = −0.60
----------------------------------- FACIT-BEGIN -----------------------------------
With n=10 observations we get 0.25·10 = 2.5 and hence the first quartile is Q1 = x(3) = −1.21.
In R we can get this by:
quantile(x, type=2,prob=0.25)
## 25%
## -1.21
------------------------------------ FACIT-END ------------------------------------
`,`
Which of the following is a correct 95% confidence interval for the mean of the population from
which the sample is taken?
1  −0.491±t0.975
0
√.490
10 = [−0.84, −0.14] where t0.975 = 2.26 is a quantile in t-distribution with
9 degrees of freedom
2  −0.491 ± t0.95
0
√.700
9
= [−0.92, −0.64] where t0.95 = 1.83 is a quantile in t-distribution with
9 degrees of freedom
3  −0.491 ± t0.95
0
√.490
9
= [−0.79, −0.19] where t0.95 = 1.83 is a quantile in t-distribution with
9 degrees of freedom
4  −0.491±t0.975
0.700
10 = [−0.65, −0.33] where t0.975 = 2.26 is a quantile in t-distribution with
9 degrees of freedom
5*  −0.491 ± t0.975
0
√.700
10 = [−0.99, 0.01] where t0.975 = 2.26 is a quantile in t-distribution with
9 degrees of freedom
30
----------------------------------- FACIT-BEGIN -----------------------------------
The 95% confidence interval is given by
x¯ ± t1−α/2
s
√
n
with the numbers given above the correct is Answer 5.
------------------------------------ FACIT-END ------------------------------------
`,`
Another sample is taken and its empirical density is:
Empirical density
x
Density
−3 −2 −1 0 1 2
0.0 0.1 0.2 0.3 0.4 0.5
What is the size of the sample, i.e. how many observations n are in the sample?
1  20
2  30
3  100
4  300
5*  This question cannot be answered with the given information
----------------------------------- FACIT-BEGIN -----------------------------------
Since we only have the relative frequencies (the empirical density), we cannot know how many
observation is in the sample.
31
------------------------------------ FACIT-END ------------------------------------
`,`
The following three plots are of coherent values of x and y for samples from three different
populations: ●●● ● ● ● ● ● ●●● ● ●●● ● ● ● ●● ● ● ● ●
0.0 0.5 1.0 1.5 2.0
0 5 10 15
x
y1 ● ● ● ● ● ● ●● ● ● ● ● ● ● ●
0.0 0.5 1.0 1.5 2.0
0 5 10 15
x
y2 ●●●● ● ● ● ● ● ● ● ● ●
0.0 0.5 1.0 1.5 2.0
0 5 10 15
x
y3
The following statements are about the correlations of the three populations from which the
samples were taken. Which of the statements is not very unlikely?
1  ρXY1 = 0, ρXY2 = 0 and ρXY3 = 0.33
2  ρXY1 = 0, ρXY2 = 0 and ρXY3 = −0.89
3  ρXY1 = 0, ρXY2 = 0.61 and ρXY3 = 0.91
4*  ρXY1 = 0.87, ρXY2 = 0 and ρXY3 = 0.92
5  ρXY1 = 0.22, ρXY2 = 0 and ρXY3 = −0.34
----------------------------------- FACIT-BEGIN -----------------------------------
From the plots we can see that ρXY1 > 0, ρXY2 ≈ 0, ρXY2 > 0, hence the only plausible is
Answer 4.
------------------------------------ FACIT-END ------------------------------------
Continues on page 33
32
Exercise VII
In a finite population of N units with mean E[Y ] = µ and variance V[Y ] = σ
2 we are considering
a sample with n units Yi
, i = 1, . . . , n. If the sample is taken randomly and without replacement,
then the sample mean is Y¯ =
1
n
Pn
i=1 Yi and the variance is V(Y¯ ) =  N−n
N

σ
2
n
. The interest is
now on the sum of the sample τ =
PN
i=1 Yi
, which can be estimated by ˆτ =
N
n
Pn
i=1 Yi
.
`,`
What is the variance of the estimator ˆτ i.e. V(ˆτ )?
1  V(ˆτ ) = N2
n
σ
2
2*  V(ˆτ ) = N(N − n)
σ
2
n
3  V(ˆτ ) = N2
n3 σ
2
4  V(ˆτ ) = N2
(1 − n)σ
2
5  V(ˆτ ) = N
n
σ
2
----------------------------------- FACIT-BEGIN -----------------------------------
Since
τˆ =
N
n
Xn
i=1
yi = Ny, ¯
we have
V[ˆτ ] = V[Ny¯]
= N
2 V[¯y]
= N
2

N − n
N

σ
2
n
= N(N − n)
σ
2
n
.
------------------------------------ FACIT-END ------------------------------------
Continues on page 34
3
Exercise VIII
Up until the 1970s in Finland, it was only allowed to sell and serve alcoholic beverages in
towns and not in rural areas. When it was wanted to ease the restrictions on alcohol sale in
rural areas it raised concerns if this would lead to an increased rate of road accidents. Ahead
of easing the restrictions a project was carried out in which: four rural municipalities were
granted extraordinary permission to sell alcohol in shops, and four other municipalities were
granted permission to, besides selling alcohol in shops, serve alcohol in restaurants and others
serving places. Finally, four other rural municipalities without extraordinary permits acted as
control. Data on the number of traffic accidents from the 12 selected municipalities over the
year the project ran is presented in the following table:
Name Control Sale SaleAndServing
177 226 226
225 196 229
167 198 215
176 206 188
Sum 745 826 858
and the chosen analyses is an ANOVA. The result is:
## Analysis of Variance Table
##
## Response: Accidents
## Df Sum Sq Mean Sq F value Pr(>F)
## Treatment A 1696.2 848.08 C D
## Residuals B 3670.7 407.86
Where Treatment is a factor dividing the municipalities into the three groups and Accidents
is the number of accidents.
`,`
To investigate whether the permission to sell alcohol has an effect on the rate of traffic accidents,
the average number of traffic accidents in the 3 groups are compared. Assuming that the
variance in the number of traffic accidents is constant between the groups, what is then the
result of the test for a difference in the mean number of traffic accidents between the 3 groups
on significance level α = 0.05?
1  The test statistic Fobs = 1.232 which under H0 follows an F-distribution with 3 and 8
degrees of freedom, gives a p-value of 0.360 and the study therefore gives no reason to
believe that an easing of alcohol restrictions will increase number of traffic accidents
2  The test statistic Fobs = 2.079 which under H0 follows an F-distribution with 2 and 9
degrees of freedom, gives a p-value of 0.181 and the study therefore showes that easing of
alcohol restrictions will certainly lead to an increase in the number of traffic accidents
34
3*  The test statistic Fobs = 2.079 which under H0 follows an F-distribution with 2 and 9
degrees of freedom, gives a p-value of 0.181 and the study therefore gives no reason to
believe that an easing of alcohol restrictions will increase number of traffic accidents
4  The test statistic Fobs = 4.324 which under H0 follows an F-distribution with 2 and 9
degrees of freedom, gives a p-value of 0.0434 and the study therefore shows that easing
of alcohol restrictions will lead to a change of the number of traffic accidents
5  The test statistic Fobs = 4.324 which under H0 follows an F-distribution with 3 and 8
degrees of freedom, gives a p-value of 0.0434 and the study therefore shows that easing
of alcohol restrictions will lead to a change of the number of traffic accidents
----------------------------------- FACIT-BEGIN -----------------------------------
First not that the degrees of fredoms are A = 3 − 1 = 2, and B = 4 · 3 − 3 = 9, these are the
degrees of fredom needed to calculate the p-value. Now lets calculate the numbers C and D
(F <- 848.08 / 407.86)
## [1] 2.079341
(p.value <- pf(F,df1=2,df2=9))
## [1] 0.8190179
Hence the only possible correct answers are 2 and 3, but in Answer 2 a wrong conclusion is
drawn (with the given p-value=0.181 > 0.05) while Answer 3 correctly states that the there is
not evidence against the null-hypothesis (that the number of accident will not increase).
------------------------------------ FACIT-END ------------------------------------
`,`
What is the estimate of the standard deviation of the errors?
1  σˆ = 1696.2/(12 − 1) = 154
2  σˆ =
p
1696.2/(3 − 1) = 29.1
3  σˆ =
p
1696.2/(12 − 1) = 11.0
4*  σˆ =
p
3670.7/(12 − 3) = 20.2
5  σˆ = 5367.1/(12 − 3)2 = 66.3
35
----------------------------------- FACIT-BEGIN -----------------------------------
The number can be calculate directly from the ANOVA table as ˆσ =
√
407.86 = 20.2.
Or more in detail R:
(SSE <- (4-1) * (687.58 + 187.666667 + 348.3333)) # Eq 8-6
## [1] 3670.74
(MSE <- SSE/(n-k))
## [1] 407.86
## The answer
sqrt(MSE)
## [1] 20.19554
sqrt(3670.7/(12-3))
## [1] 20.19543
------------------------------------ FACIT-END ------------------------------------
`,`
The assumption homogeneous variance is validated with the following box plots:
Control Sale SaleAndServing
170 180 190 200 210 220 230
36
Which of the following statements is the most correct conclusion based on this plot and the
informations given (not all the statements are necessarily meaningful)?
1  Taking the high number of observation into account there is no evidence that the assumption of homogeneous variance is not fulfilled
2  Taking the high number of observation into account there is evidence that the assumption
of homogeneous variance is not fulfilled
3*  Taking the low number of observation into account there is no evidence that the assumption of homogeneous variance is not fulfilled
4  Taking the low number of observation into account there is evidence that the assumption
of homogeneous variance is not fulfilled
5  Based on the information provided there cannot be drawn any conclusions about the
assumption of homogeneous variance
----------------------------------- FACIT-BEGIN -----------------------------------
The number of observations for each box-plot is 4, which is a small number (hence we can
exclude answer 1 and 2). With a low number of observations we will have to accept some
differences between the box plots and hence there is no evidence against the hypothesis of
homogeneous variance.
------------------------------------ FACIT-END ------------------------------------
Continues on page 38
37
Exercise IX
The Environmental and Food Agency collects data on waste in Denmark every year and publishes a report with data and analyses. The report is named “Affaldsstatistik 2015”(1
) and in
it one can find the amount of waste (kg) per citizen for the years 2013 to 2015 grouped on
regions:
Hovedstaden Midtjylland Nordjylland Sjaelland Syddanmark
2013 429 434 525 506 482
2014 458 463 527 492 486
2015 446 459 535 508 493
The following box plot shows waste per citizen grouped on year and on region:
2013 2014 2015
440 460 480 500 520
Year
Waste (kg per citizen)
Hovedstaden Midtjylland Nordjylland Sjaelland Syddanmark
440 460 480 500 520
Region
Waste (kg per citizen)
A 2-way ANOVA is carried out and the result is:
## Analysis of Variance Table
##
## Response: Waste
## Df Sum Sq Mean Sq F value Pr(>F)
## Year 2 463.3 231.7 2.5551 0.1386
## Region 4 14847.1 3711.8 40.9386 2.266e-05 ***
## Residuals 8 725.3 90.7
## ---
## Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
1http://www2.mst.dk/Udgiv/publikationer/2017/05/978-87-93614-01-7.pdf
38
`,`
Which of the following statements is correct when using a significance level of α = 5%?
1  From the box plot it can be seen that there is no significant difference in waste between
the years, which is also the conclusion from the ANOVA test
2  Anwers taken out of the exam.
3*  From the box plot it is not possible to conclude if there is a significant difference in waste
between the years, but from the ANOVA test no significant difference in waste between
the years can be concluded
4  From the box plot it is not possible no conclude if there is a significant difference in waste
between the years, but from the ANOVA test a significant difference in waste between
the years can be concluded
5  None of the statements above are correct
----------------------------------- FACIT-BEGIN -----------------------------------
Since we have two effects, we cannot make conclusions about the effects of years based on
the box plot. Hence answer 1 and 2 are both wrong. The ANOVA test shows no significant
difference between years, since the p-value= 0.1386 > 0.05.
------------------------------------ FACIT-END ------------------------------------
`,`
Further, in the report it is listed how large a proportion of the waste is sorted in the five regions
and the proportion of waste that is sorted is calculated for each year and each region. A 2-way
ANOVA has been carried out on this data with the following result:
## Analysis of Variance Table
##
## Response: Proportion
## Df Sum Sq Mean Sq F value Pr(>F)
## Year 2 0.0109878 0.0054939 13.054 0.003026 **
## Region 4 0.0173773 0.0043443 10.323 0.003019 **
## Residuals 8 0.0033668 0.0004208
## ---
## Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
Which one of the following conclusions is correct using a significance level of 5% (both argument
and conclusion must be correct)?
39
1  Since the p-value > 0.05 for the relevant test, a significant change in the sorted proportion
over the years is not detected
2*  Since P(F > 13.054) < 0.05 where F follows the relevant F-distribution, a significant
change in the sorted proportion over the years is detected
3  Since P(T > 0.003) > 0.05 where T follows the relevant t-distribution, a significant
change in the sorted proportion over the years is not detected
4  Since P(T < 10.323) < 0.05 where T follows the relevant t-distribution, a significant
change in the sorted proportion over the years is detected
5  Since 1 − P(T > 10.323) > 0.05 where T follows the relevant t-distribution, a significant
change in the sorted proportion over the years is not detected
----------------------------------- FACIT-BEGIN -----------------------------------
Both p-values are less than 0.05, hance Answer 1 is not correct. Since P(F > 13.054) =
0.00303 < 0.05 there is a significant effect of years, hence Answer 2 is correct.
Answer 3 compares a p-value with a t-distribution (hence wrong). Answer 4 and 5 uses both a
wrong distribution.
------------------------------------ FACIT-END ------------------------------------
`,`
The box plots showing the proportion of sorted waste by year and by region are:
2013 2014 2015
0.24 0.26 0.28 0.30 0.32 0.34 0.36
Year
Sorted proportion
Hovedstaden Midtjylland Nordjylland Sjaelland Syddanmark
0.24 0.26 0.28 0.30 0.32 0.34 0.36
Region
Sorted proportion
40
It is seen that in 2015 there is an observation which is low compared to the others, and it is
identified as an outlier according to the modified box plot.
Which of the following statements is not correct (Tip: Remember that there is only one observation for each year in each region)?
1  The lowest observation in 2013 is from Hovedstaden
2  The lowest observation in 2015 (i.e. the outlier) is from Nordjylland
3*  Each year Sjaelland has had a higher observation than Hovedstaden
4  Nordjylland has the lowest median
5  The 75% quantile for 2014 is higher than the 25% quantile for 2015
----------------------------------- FACIT-BEGIN -----------------------------------
Lets go through the answers:
1 In the right box plot it is seen that Hovedstaden has the lowest value of all the regions,
and 2013 have the lowest value of all years, hence Hovedstaden must have the value in
2013. Thus TRUE
2 All regions have exactly one observation in 2015. Nordjylland has none higher than the
outlier, hence it must belong to Nordjylland. Thus TRUE
3 The median for the regions mark exactly the middle observation, since there are only 3
values for each region. Since Hovedstaden has had 2 values above the 2’nd highest value
for Sjaelland, then Hovedstaden must have had a higher value one of the years. Thus
NOT TRUE
4 The black bar in the box marks the median, which thus seen in the right-hand box plot
to be lowest for Nordjylland. Thus TRUE
5 The 75% quantile is marked by the upper side of the box, thus on the left-hand box plot
it is seen to be higher for 2014 than the 25% quantile for 2015 (marked by the lower side
of the box). Thus TRUE
------------------------------------ FACIT-END ------------------------------------
Continues on page 42
41
THE EXAM IS FINISHED. Enjoy the late summer!
42`]