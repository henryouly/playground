<!-- Code generated by gomarkdoc. DO NOT EDIT -->

# trend

```go
import "github.com/cinar/indicator/strategy/trend"
```

Package trend contains the trend strategy functions.

This package belongs to the Indicator project. Indicator is a Golang module that supplies a variety of technical indicators, strategies, and a backtesting framework for analysis.

### License

```
Copyright (c) 2021-2023 Onur Cinar.
The source code is provided under GNU AGPLv3 License.
https://github.com/cinar/indicator
```

### Disclaimer

The information provided on this project is strictly for informational purposes and is not to be construed as advice or solicitation to buy or sell any security.

## Index

- [Constants](<#constants>)
- [func AllStrategies\(\) \[\]strategy.Strategy](<#AllStrategies>)
- [type ApoStrategy](<#ApoStrategy>)
  - [func NewApoStrategy\(\) \*ApoStrategy](<#NewApoStrategy>)
  - [func \(a \*ApoStrategy\) Compute\(snapshots \<\-chan \*asset.Snapshot\) \<\-chan strategy.Action](<#ApoStrategy.Compute>)
  - [func \(\*ApoStrategy\) Name\(\) string](<#ApoStrategy.Name>)
  - [func \(a \*ApoStrategy\) Report\(c \<\-chan \*asset.Snapshot\) \*helper.Report](<#ApoStrategy.Report>)
- [type AroonStrategy](<#AroonStrategy>)
  - [func NewAroonStrategy\(\) \*AroonStrategy](<#NewAroonStrategy>)
  - [func \(a \*AroonStrategy\) Compute\(c \<\-chan \*asset.Snapshot\) \<\-chan strategy.Action](<#AroonStrategy.Compute>)
  - [func \(\*AroonStrategy\) Name\(\) string](<#AroonStrategy.Name>)
  - [func \(a \*AroonStrategy\) Report\(c \<\-chan \*asset.Snapshot\) \*helper.Report](<#AroonStrategy.Report>)
- [type BopStrategy](<#BopStrategy>)
  - [func NewBopStrategy\(\) \*BopStrategy](<#NewBopStrategy>)
  - [func \(b \*BopStrategy\) Compute\(c \<\-chan \*asset.Snapshot\) \<\-chan strategy.Action](<#BopStrategy.Compute>)
  - [func \(\*BopStrategy\) Name\(\) string](<#BopStrategy.Name>)
  - [func \(b \*BopStrategy\) Report\(c \<\-chan \*asset.Snapshot\) \*helper.Report](<#BopStrategy.Report>)
- [type CciStrategy](<#CciStrategy>)
  - [func NewCciStrategy\(\) \*CciStrategy](<#NewCciStrategy>)
  - [func \(t \*CciStrategy\) Compute\(c \<\-chan \*asset.Snapshot\) \<\-chan strategy.Action](<#CciStrategy.Compute>)
  - [func \(\*CciStrategy\) Name\(\) string](<#CciStrategy.Name>)
  - [func \(t \*CciStrategy\) Report\(c \<\-chan \*asset.Snapshot\) \*helper.Report](<#CciStrategy.Report>)
- [type DemaStrategy](<#DemaStrategy>)
  - [func NewDemaStrategy\(\) \*DemaStrategy](<#NewDemaStrategy>)
  - [func \(d \*DemaStrategy\) Compute\(c \<\-chan \*asset.Snapshot\) \<\-chan strategy.Action](<#DemaStrategy.Compute>)
  - [func \(\*DemaStrategy\) Name\(\) string](<#DemaStrategy.Name>)
  - [func \(d \*DemaStrategy\) Report\(c \<\-chan \*asset.Snapshot\) \*helper.Report](<#DemaStrategy.Report>)
- [type KdjStrategy](<#KdjStrategy>)
  - [func NewKdjStrategy\(\) \*KdjStrategy](<#NewKdjStrategy>)
  - [func \(kdj \*KdjStrategy\) Compute\(c \<\-chan \*asset.Snapshot\) \<\-chan strategy.Action](<#KdjStrategy.Compute>)
  - [func \(\*KdjStrategy\) Name\(\) string](<#KdjStrategy.Name>)
  - [func \(kdj \*KdjStrategy\) Report\(c \<\-chan \*asset.Snapshot\) \*helper.Report](<#KdjStrategy.Report>)
- [type MacdStrategy](<#MacdStrategy>)
  - [func NewMacdStrategy\(\) \*MacdStrategy](<#NewMacdStrategy>)
  - [func \(m \*MacdStrategy\) Compute\(snapshots \<\-chan \*asset.Snapshot\) \<\-chan strategy.Action](<#MacdStrategy.Compute>)
  - [func \(\*MacdStrategy\) Name\(\) string](<#MacdStrategy.Name>)
  - [func \(m \*MacdStrategy\) Report\(c \<\-chan \*asset.Snapshot\) \*helper.Report](<#MacdStrategy.Report>)
- [type QstickStrategy](<#QstickStrategy>)
  - [func NewQstickStrategy\(\) \*QstickStrategy](<#NewQstickStrategy>)
  - [func \(q \*QstickStrategy\) Compute\(c \<\-chan \*asset.Snapshot\) \<\-chan strategy.Action](<#QstickStrategy.Compute>)
  - [func \(\*QstickStrategy\) Name\(\) string](<#QstickStrategy.Name>)
  - [func \(q \*QstickStrategy\) Report\(c \<\-chan \*asset.Snapshot\) \*helper.Report](<#QstickStrategy.Report>)
- [type TrimaStrategy](<#TrimaStrategy>)
  - [func NewTrimaStrategy\(\) \*TrimaStrategy](<#NewTrimaStrategy>)
  - [func \(t \*TrimaStrategy\) Compute\(c \<\-chan \*asset.Snapshot\) \<\-chan strategy.Action](<#TrimaStrategy.Compute>)
  - [func \(\*TrimaStrategy\) Name\(\) string](<#TrimaStrategy.Name>)
  - [func \(t \*TrimaStrategy\) Report\(c \<\-chan \*asset.Snapshot\) \*helper.Report](<#TrimaStrategy.Report>)
- [type TrixStrategy](<#TrixStrategy>)
  - [func NewTrixStrategy\(\) \*TrixStrategy](<#NewTrixStrategy>)
  - [func \(t \*TrixStrategy\) Compute\(snapshots \<\-chan \*asset.Snapshot\) \<\-chan strategy.Action](<#TrixStrategy.Compute>)
  - [func \(\*TrixStrategy\) Name\(\) string](<#TrixStrategy.Name>)
  - [func \(t \*TrixStrategy\) Report\(c \<\-chan \*asset.Snapshot\) \*helper.Report](<#TrixStrategy.Report>)
- [type VwmaStrategy](<#VwmaStrategy>)
  - [func NewVwmaStrategy\(\) \*VwmaStrategy](<#NewVwmaStrategy>)
  - [func \(v \*VwmaStrategy\) Compute\(c \<\-chan \*asset.Snapshot\) \<\-chan strategy.Action](<#VwmaStrategy.Compute>)
  - [func \(\*VwmaStrategy\) Name\(\) string](<#VwmaStrategy.Name>)
  - [func \(v \*VwmaStrategy\) Report\(c \<\-chan \*asset.Snapshot\) \*helper.Report](<#VwmaStrategy.Report>)


## Constants

<a name="DefaultDemaStrategyPeriod1"></a>

```go
const (
    // DefaultDemaStrategyPeriod1 is the first DEMA period.
    DefaultDemaStrategyPeriod1 = 5

    // DefaultDemaStrategyPeriod2 is the second DEMA period.
    DefaultDemaStrategyPeriod2 = 35
)
```

<a name="DefaultTrimaStrategyShortPeriod"></a>

```go
const (
    // DefaultTrimaStrategyShortPeriod is the first TRIMA period.
    DefaultTrimaStrategyShortPeriod = 20

    // DefaultTrimaStrategyLongPeriod is the second TRIMA period.
    DefaultTrimaStrategyLongPeriod = 50
)
```

<a name="DefaultVwmaStrategyPeriod"></a>

```go
const (
    // DefaultVwmaStrategyPeriod is the default VWMA period.
    DefaultVwmaStrategyPeriod = 20
)
```

<a name="AllStrategies"></a>
## func [AllStrategies](<https://github.com/cinar/indicator/blob/v2/strategy/trend/trend.go#L24>)

```go
func AllStrategies() []strategy.Strategy
```

AllStrategies returns a slice containing references to all available trend strategies.

<a name="ApoStrategy"></a>
## type [ApoStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/apo_strategy.go#L18-L24>)

ApoStrategy represents the configuration parameters for calculating the APO strategy. An APO value crossing above zero suggests a bullish trend, while crossing below zero indicates a bearish trend. Positive APO values signify an upward trend, while negative values signify a downward trend.

```go
type ApoStrategy struct {
    strategy.Strategy

    // Apo represents the configuration parameters for calculating the
    // Absolute Price Oscillator (APO).
    Apo *trend.Apo[float64]
}
```

<a name="NewApoStrategy"></a>
### func [NewApoStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/apo_strategy.go#L27>)

```go
func NewApoStrategy() *ApoStrategy
```

NewApoStrategy function initializes a new APO strategy instance with the default parameters.

<a name="ApoStrategy.Compute"></a>
### func \(\*ApoStrategy\) [Compute](<https://github.com/cinar/indicator/blob/v2/strategy/trend/apo_strategy.go#L40>)

```go
func (a *ApoStrategy) Compute(snapshots <-chan *asset.Snapshot) <-chan strategy.Action
```

Compute processes the provided asset snapshots and generates a stream of actionable recommendations.

<a name="ApoStrategy.Name"></a>
### func \(\*ApoStrategy\) [Name](<https://github.com/cinar/indicator/blob/v2/strategy/trend/apo_strategy.go#L34>)

```go
func (*ApoStrategy) Name() string
```

Name returns the name of the strategy.

<a name="ApoStrategy.Report"></a>
### func \(\*ApoStrategy\) [Report](<https://github.com/cinar/indicator/blob/v2/strategy/trend/apo_strategy.go#L73>)

```go
func (a *ApoStrategy) Report(c <-chan *asset.Snapshot) *helper.Report
```

Report processes the provided asset snapshots and generates a report annotated with the recommended actions.

<a name="AroonStrategy"></a>
## type [AroonStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/aroon_strategy.go#L20-L25>)

AroonStrategy represents the configuration parameters for calculating the Aroon strategy. Aroon is a technical analysis tool that gauges trend direction and strength in asset prices. It comprises two lines: Aroon Up and Aroon Down. Aroon Up measures uptrend strength, while Aroon Down measures downtrend strength. When Aroon Up exceeds Aroon Down, it suggests a bullish trend; when Aroon Down surpasses Aroon Up, it indicates a bearish trend.

```go
type AroonStrategy struct {
    strategy.Strategy

    // Aroon represent the configuration for calculating the Aroon indicator.
    Aroon *trend.Aroon[float64]
}
```

<a name="NewAroonStrategy"></a>
### func [NewAroonStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/aroon_strategy.go#L29>)

```go
func NewAroonStrategy() *AroonStrategy
```

NewAroonStrategy function initializes a new Aroon strategy instance with the default parameters.

<a name="AroonStrategy.Compute"></a>
### func \(\*AroonStrategy\) [Compute](<https://github.com/cinar/indicator/blob/v2/strategy/trend/aroon_strategy.go#L42>)

```go
func (a *AroonStrategy) Compute(c <-chan *asset.Snapshot) <-chan strategy.Action
```

Compute processes the provided asset snapshots and generates a stream of actionable recommendations.

<a name="AroonStrategy.Name"></a>
### func \(\*AroonStrategy\) [Name](<https://github.com/cinar/indicator/blob/v2/strategy/trend/aroon_strategy.go#L36>)

```go
func (*AroonStrategy) Name() string
```

Name returns the name of the strategy.

<a name="AroonStrategy.Report"></a>
### func \(\*AroonStrategy\) [Report](<https://github.com/cinar/indicator/blob/v2/strategy/trend/aroon_strategy.go#L72>)

```go
func (a *AroonStrategy) Report(c <-chan *asset.Snapshot) *helper.Report
```

Report processes the provided asset snapshots and generates a report annotated with the recommended actions.

<a name="BopStrategy"></a>
## type [BopStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/bop_strategy.go#L18-L24>)

BopStrategy gauges the strength of buying and selling forces using the Balance of Power \(BoP\) indicator. A positive BoP value suggests an upward trend, while a negative value indicates a downward trend. A BoP value of zero implies equilibrium between the two forces.

```go
type BopStrategy struct {
    strategy.Strategy

    // Bop represents the configuration parameters for calculating the
    // Balance of Power (BoP).
    Bop *trend.Bop[float64]
}
```

<a name="NewBopStrategy"></a>
### func [NewBopStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/bop_strategy.go#L27>)

```go
func NewBopStrategy() *BopStrategy
```

NewBopStrategy function initializes a new BoP strategy instance with the default parameters.

<a name="BopStrategy.Compute"></a>
### func \(\*BopStrategy\) [Compute](<https://github.com/cinar/indicator/blob/v2/strategy/trend/bop_strategy.go#L40>)

```go
func (b *BopStrategy) Compute(c <-chan *asset.Snapshot) <-chan strategy.Action
```

Compute processes the provided asset snapshots and generates a stream of actionable recommendations.

<a name="BopStrategy.Name"></a>
### func \(\*BopStrategy\) [Name](<https://github.com/cinar/indicator/blob/v2/strategy/trend/bop_strategy.go#L34>)

```go
func (*BopStrategy) Name() string
```

Name returns the name of the strategy.

<a name="BopStrategy.Report"></a>
### func \(\*BopStrategy\) [Report](<https://github.com/cinar/indicator/blob/v2/strategy/trend/bop_strategy.go#L65>)

```go
func (b *BopStrategy) Report(c <-chan *asset.Snapshot) *helper.Report
```

Report processes the provided asset snapshots and generates a report annotated with the recommended actions.

<a name="CciStrategy"></a>
## type [CciStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/cci_strategy.go#L17-L22>)

CciStrategy represents the configuration parameters for calculating the CCI strategy. A CCI value crossing above the 100\+ suggests a bullish trend, while crossing below the 100\- indicates a bearish trend.

```go
type CciStrategy struct {
    strategy.Strategy

    // Cci represents the configuration parameters for calculating the CCI.
    Cci *trend.Cci[float64]
}
```

<a name="NewCciStrategy"></a>
### func [NewCciStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/cci_strategy.go#L25>)

```go
func NewCciStrategy() *CciStrategy
```

NewCciStrategy function initializes a new CCI strategy instance.

<a name="CciStrategy.Compute"></a>
### func \(\*CciStrategy\) [Compute](<https://github.com/cinar/indicator/blob/v2/strategy/trend/cci_strategy.go#L37>)

```go
func (t *CciStrategy) Compute(c <-chan *asset.Snapshot) <-chan strategy.Action
```

Compute processes the provided asset snapshots and generates a stream of actionable recommendations.

<a name="CciStrategy.Name"></a>
### func \(\*CciStrategy\) [Name](<https://github.com/cinar/indicator/blob/v2/strategy/trend/cci_strategy.go#L32>)

```go
func (*CciStrategy) Name() string
```

Name returns the name of the strategy.

<a name="CciStrategy.Report"></a>
### func \(\*CciStrategy\) [Report](<https://github.com/cinar/indicator/blob/v2/strategy/trend/cci_strategy.go#L66>)

```go
func (t *CciStrategy) Report(c <-chan *asset.Snapshot) *helper.Report
```

Report processes the provided asset snapshots and generates a report annotated with the recommended actions.

<a name="DemaStrategy"></a>
## type [DemaStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/dema_strategy.go#L27-L37>)

DemaStrategy represents the configuration parameters for calculating the DEMA strategy. A bullish cross occurs when DEMA with 5 days period moves above DEMA with 35 days period. A bearish cross occurs when DEMA with 35 days period moves above DEMA With 5 days period.

```go
type DemaStrategy struct {
    strategy.Strategy

    // Dema1 represents the configuration parameters for
    // calculating the first DEMA.
    Dema1 *trend.Dema[float64]

    // Dema2 represents the configuration parameters for
    // calculating the second DEMA.
    Dema2 *trend.Dema[float64]
}
```

<a name="NewDemaStrategy"></a>
### func [NewDemaStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/dema_strategy.go#L41>)

```go
func NewDemaStrategy() *DemaStrategy
```

NewDemaStrategy function initializes a new DEMA strategy instance with the default parameters.

<a name="DemaStrategy.Compute"></a>
### func \(\*DemaStrategy\) [Compute](<https://github.com/cinar/indicator/blob/v2/strategy/trend/dema_strategy.go#L63>)

```go
func (d *DemaStrategy) Compute(c <-chan *asset.Snapshot) <-chan strategy.Action
```

Compute processes the provided asset snapshots and generates a stream of actionable recommendations.

<a name="DemaStrategy.Name"></a>
### func \(\*DemaStrategy\) [Name](<https://github.com/cinar/indicator/blob/v2/strategy/trend/dema_strategy.go#L57>)

```go
func (*DemaStrategy) Name() string
```

Name returns the name of the strategy.

<a name="DemaStrategy.Report"></a>
### func \(\*DemaStrategy\) [Report](<https://github.com/cinar/indicator/blob/v2/strategy/trend/dema_strategy.go#L95>)

```go
func (d *DemaStrategy) Report(c <-chan *asset.Snapshot) *helper.Report
```

Report processes the provided asset snapshots and generates a report annotated with the recommended actions.

<a name="KdjStrategy"></a>
## type [KdjStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/kdj_strategy.go#L17-L22>)

KdjStrategy represents the configuration parameters for calculating the KDJ strategy. Generates BUY action when j value crosses above both k and d values. Generates SELL action when j value crosses below both k and d values.

```go
type KdjStrategy struct {
    strategy.Strategy

    // Kdj represents the configuration parameters for calculating the KDJ.
    Kdj *trend.Kdj[float64]
}
```

<a name="NewKdjStrategy"></a>
### func [NewKdjStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/kdj_strategy.go#L25>)

```go
func NewKdjStrategy() *KdjStrategy
```

NewKdjStrategy function initializes a new KDJ strategy instance.

<a name="KdjStrategy.Compute"></a>
### func \(\*KdjStrategy\) [Compute](<https://github.com/cinar/indicator/blob/v2/strategy/trend/kdj_strategy.go#L38>)

```go
func (kdj *KdjStrategy) Compute(c <-chan *asset.Snapshot) <-chan strategy.Action
```

Compute processes the provided asset snapshots and generates a stream of actionable recommendations.

<a name="KdjStrategy.Name"></a>
### func \(\*KdjStrategy\) [Name](<https://github.com/cinar/indicator/blob/v2/strategy/trend/kdj_strategy.go#L32>)

```go
func (*KdjStrategy) Name() string
```

Name returns the name of the strategy.

<a name="KdjStrategy.Report"></a>
### func \(\*KdjStrategy\) [Report](<https://github.com/cinar/indicator/blob/v2/strategy/trend/kdj_strategy.go#L74>)

```go
func (kdj *KdjStrategy) Report(c <-chan *asset.Snapshot) *helper.Report
```

Report processes the provided asset snapshots and generates a report annotated with the recommended actions.

<a name="MacdStrategy"></a>
## type [MacdStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/macd_strategy.go#L18-L24>)

MacdStrategy represents the configuration parameters for calculating the MACD strategy. A MACD value crossing above the signal line suggests a bullish trend, while crossing below the signal line indicates a bearish trend.

```go
type MacdStrategy struct {
    strategy.Strategy

    // Macd represents the configuration parameters for calculating the
    // Moving Average Convergence Divergence (MACD).
    Macd *trend.Macd[float64]
}
```

<a name="NewMacdStrategy"></a>
### func [NewMacdStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/macd_strategy.go#L27>)

```go
func NewMacdStrategy() *MacdStrategy
```

NewMacdStrategy function initializes a new MACD strategy instance.

<a name="MacdStrategy.Compute"></a>
### func \(\*MacdStrategy\) [Compute](<https://github.com/cinar/indicator/blob/v2/strategy/trend/macd_strategy.go#L40>)

```go
func (m *MacdStrategy) Compute(snapshots <-chan *asset.Snapshot) <-chan strategy.Action
```

Compute processes the provided asset snapshots and generates a stream of actionable recommendations.

<a name="MacdStrategy.Name"></a>
### func \(\*MacdStrategy\) [Name](<https://github.com/cinar/indicator/blob/v2/strategy/trend/macd_strategy.go#L34>)

```go
func (*MacdStrategy) Name() string
```

Name returns the name of the strategy.

<a name="MacdStrategy.Report"></a>
### func \(\*MacdStrategy\) [Report](<https://github.com/cinar/indicator/blob/v2/strategy/trend/macd_strategy.go#L73>)

```go
func (m *MacdStrategy) Report(c <-chan *asset.Snapshot) *helper.Report
```

Report processes the provided asset snapshots and generates a report annotated with the recommended actions.

<a name="QstickStrategy"></a>
## type [QstickStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/qstick_strategy.go#L21-L26>)

QstickStrategy represents the configuration parameters for calculating the Qstick strategy. Qstick is a momentum indicator used to identify an asset's trend by looking at the SMA of the difference between its closing and opening.

A Qstick above zero indicates increasing buying pressure, while a Qstick below zero indicates increasing selling pressure.

```go
type QstickStrategy struct {
    strategy.Strategy

    // Qstick represents the configuration parameters for calculating the Qstick.
    Qstick *momentum.Qstick[float64]
}
```

<a name="NewQstickStrategy"></a>
### func [NewQstickStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/qstick_strategy.go#L29>)

```go
func NewQstickStrategy() *QstickStrategy
```

NewQstickStrategy function initializes a new Qstick strategy instance.

<a name="QstickStrategy.Compute"></a>
### func \(\*QstickStrategy\) [Compute](<https://github.com/cinar/indicator/blob/v2/strategy/trend/qstick_strategy.go#L42>)

```go
func (q *QstickStrategy) Compute(c <-chan *asset.Snapshot) <-chan strategy.Action
```

Compute processes the provided asset snapshots and generates a stream of actionable recommendations.

<a name="QstickStrategy.Name"></a>
### func \(\*QstickStrategy\) [Name](<https://github.com/cinar/indicator/blob/v2/strategy/trend/qstick_strategy.go#L36>)

```go
func (*QstickStrategy) Name() string
```

Name returns the name of the strategy.

<a name="QstickStrategy.Report"></a>
### func \(\*QstickStrategy\) [Report](<https://github.com/cinar/indicator/blob/v2/strategy/trend/qstick_strategy.go#L75>)

```go
func (q *QstickStrategy) Report(c <-chan *asset.Snapshot) *helper.Report
```

Report processes the provided asset snapshots and generates a report annotated with the recommended actions.

<a name="TrimaStrategy"></a>
## type [TrimaStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/trima_strategy.go#L25-L33>)

TrimaStrategy represents the configuration parameters for calculating the TRIMA strategy. A bullish cross occurs when the short TRIMA moves above the long TRIMA. A bearish cross occurs when the short TRIMA moves below the long TRIME.

```go
type TrimaStrategy struct {
    strategy.Strategy

    // Trima1 represents the configuration parameters for calculating the short TRIMA.
    Short *trend.Trima[float64]

    // Trima2 represents the configuration parameters for calculating the long TRIMA.
    Long *trend.Trima[float64]
}
```

<a name="NewTrimaStrategy"></a>
### func [NewTrimaStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/trima_strategy.go#L37>)

```go
func NewTrimaStrategy() *TrimaStrategy
```

NewTrimaStrategy function initializes a new TRIMA strategy instance with the default parameters.

<a name="TrimaStrategy.Compute"></a>
### func \(\*TrimaStrategy\) [Compute](<https://github.com/cinar/indicator/blob/v2/strategy/trend/trima_strategy.go#L56>)

```go
func (t *TrimaStrategy) Compute(c <-chan *asset.Snapshot) <-chan strategy.Action
```

Compute processes the provided asset snapshots and generates a stream of actionable recommendations.

<a name="TrimaStrategy.Name"></a>
### func \(\*TrimaStrategy\) [Name](<https://github.com/cinar/indicator/blob/v2/strategy/trend/trima_strategy.go#L50>)

```go
func (*TrimaStrategy) Name() string
```

Name returns the name of the strategy.

<a name="TrimaStrategy.Report"></a>
### func \(\*TrimaStrategy\) [Report](<https://github.com/cinar/indicator/blob/v2/strategy/trend/trima_strategy.go#L86>)

```go
func (t *TrimaStrategy) Report(c <-chan *asset.Snapshot) *helper.Report
```

Report processes the provided asset snapshots and generates a report annotated with the recommended actions.

<a name="TrixStrategy"></a>
## type [TrixStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/trix_strategy.go#L17-L22>)

TrixStrategy represents the configuration parameters for calculating the TRIX strategy. A TRIX value crossing above the zero line suggests a bullish trend, while crossing below the zero line indicates a bearish trend.

```go
type TrixStrategy struct {
    strategy.Strategy

    // Trix represents the configuration parameters for calculating the TRIX.
    Trix *trend.Trix[float64]
}
```

<a name="NewTrixStrategy"></a>
### func [NewTrixStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/trix_strategy.go#L25>)

```go
func NewTrixStrategy() *TrixStrategy
```

NewTrixStrategy function initializes a new TRIX strategy instance.

<a name="TrixStrategy.Compute"></a>
### func \(\*TrixStrategy\) [Compute](<https://github.com/cinar/indicator/blob/v2/strategy/trend/trix_strategy.go#L37>)

```go
func (t *TrixStrategy) Compute(snapshots <-chan *asset.Snapshot) <-chan strategy.Action
```

Compute processes the provided asset snapshots and generates a stream of actionable recommendations.

<a name="TrixStrategy.Name"></a>
### func \(\*TrixStrategy\) [Name](<https://github.com/cinar/indicator/blob/v2/strategy/trend/trix_strategy.go#L32>)

```go
func (*TrixStrategy) Name() string
```

Name returns the name of the strategy.

<a name="TrixStrategy.Report"></a>
### func \(\*TrixStrategy\) [Report](<https://github.com/cinar/indicator/blob/v2/strategy/trend/trix_strategy.go#L61>)

```go
func (t *TrixStrategy) Report(c <-chan *asset.Snapshot) *helper.Report
```

Report processes the provided asset snapshots and generates a report annotated with the recommended actions.

<a name="VwmaStrategy"></a>
## type [VwmaStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/vwma_strategy.go#L22-L30>)

VwmaStrategy represents the configuration parameters for calculating the VWMA strategy. The VwmaStrategy function uses SMA and VWMA indicators to provide a BUY action when VWMA is above SMA, and a SELL signal when VWMA is below SMA, a HOLD otherwse.

```go
type VwmaStrategy struct {
    strategy.Strategy

    // VWMA indicator.
    Vwma *trend.Vwma[float64]

    // SMA indicator.
    Sma *trend.Sma[float64]
}
```

<a name="NewVwmaStrategy"></a>
### func [NewVwmaStrategy](<https://github.com/cinar/indicator/blob/v2/strategy/trend/vwma_strategy.go#L33>)

```go
func NewVwmaStrategy() *VwmaStrategy
```

NewVwmaStrategy function initializes a new VWMA strategy instance with the default parameters.

<a name="VwmaStrategy.Compute"></a>
### func \(\*VwmaStrategy\) [Compute](<https://github.com/cinar/indicator/blob/v2/strategy/trend/vwma_strategy.go#L51>)

```go
func (v *VwmaStrategy) Compute(c <-chan *asset.Snapshot) <-chan strategy.Action
```

Compute processes the provided asset snapshots and generates a stream of actionable recommendations.

<a name="VwmaStrategy.Name"></a>
### func \(\*VwmaStrategy\) [Name](<https://github.com/cinar/indicator/blob/v2/strategy/trend/vwma_strategy.go#L46>)

```go
func (*VwmaStrategy) Name() string
```

Name returns the name of the strategy.

<a name="VwmaStrategy.Report"></a>
### func \(\*VwmaStrategy\) [Report](<https://github.com/cinar/indicator/blob/v2/strategy/trend/vwma_strategy.go#L76>)

```go
func (v *VwmaStrategy) Report(c <-chan *asset.Snapshot) *helper.Report
```

Report processes the provided asset snapshots and generates a report annotated with the recommended actions.

Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
